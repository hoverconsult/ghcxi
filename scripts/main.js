// Main application script

document.addEventListener('DOMContentLoaded', function() {
  normalizeRootLinks();
  renderSectors();
  setupScrollingNavigation();
  setupMobileNavigation();
  setupModalDismissal();
  initializeSectorExtension();
});

function sitePath(path) {
  if (!path || path.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(path)) {
    return path;
  }

  const repoBase = window.location.pathname.startsWith('/ghcxi/') ? '/ghcxi' : '';
  if (path.startsWith('/')) {
    return `${repoBase}${path}`;
  }

  return path;
}

function normalizeRootLinks() {
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.setAttribute('href', sitePath(link.getAttribute('href')));
  });
}

// Render sectors grid dynamically
function renderSectors() {
  const grid = document.getElementById('sectors-grid');
  if (!grid || !BCXI_CONFIG || !BCXI_CONFIG.sectors) return;

  grid.innerHTML = BCXI_CONFIG.sectors.map(sector => {
    const isActive = sector.status === 'active';
    const cardClass = `sector-card has-card-body ${isActive ? 'active' : 'coming-soon'}`;
    const href = sitePath(`/${sector.slug}/`);
    const theme = sector.theme || {};
    const style = [
      theme.primary ? `--sector-primary:${theme.primary}` : '',
      theme.accent ? `--sector-accent:${theme.accent}` : '',
      theme.highlight ? `--sector-highlight:${theme.highlight}` : ''
    ].filter(Boolean).join(';');
    const image = sector.heroImage
      ? `<img src="${sitePath(sector.heroImage)}" alt="" class="sector-card-image" loading="lazy" decoding="async" onerror="this.remove();">`
      : '';

    return `
      <a href="${href}" class="${cardClass}" style="${style}">
        ${image}
        <div class="sector-card-body">
          <div class="sector-icon">${sector.icon}</div>
          <h3>${sector.name}</h3>
          <p class="sector-description">${sector.description}</p>
          <span class="sector-status ${!isActive ? 'coming-soon' : ''}">
            ${isActive ? 'Active' : 'Coming Soon'}
          </span>
          <span class="sector-explore">${sector.ctaLabel || 'Explore Sector'} <span aria-hidden="true">&rarr;</span></span>
        </div>
      </a>
    `;
  }).join('');
}

function getCurrentSector() {
  if (typeof BCXI_CONFIG === 'undefined' || !BCXI_CONFIG.sectors) return null;

  const segments = window.location.pathname.split('/').filter(Boolean);
  const siteSegments = segments[0] === 'ghcxi' ? segments.slice(1) : segments;
  const slug = siteSegments[0];

  return BCXI_CONFIG.sectors.find(sector => sector.slug === slug) || null;
}

function loadSiteScript(path) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src$="${path}"]`);
    if (existing) {
      if (typeof INSTITUTIONS !== 'undefined') resolve();
      else existing.addEventListener('load', resolve, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = sitePath(path);
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function initializeSectorExtension() {
  const sector = getCurrentSector();
  if (!sector || sector.slug === 'banks') return;

  const theme = sector.theme || {};
  const root = document.documentElement;
  if (theme.primary) root.style.setProperty('--sector-primary', theme.primary);
  if (theme.accent) root.style.setProperty('--sector-accent', theme.accent);
  if (theme.highlight) root.style.setProperty('--sector-highlight', theme.highlight);
  document.body.dataset.sector = sector.slug;
  document.body.classList.add('sector-extended-page');

  const hero = document.querySelector('.sector-hero');
  if (hero && sector.heroImage) {
    hero.classList.add('sector-hero-with-image');
    hero.style.setProperty('--sector-hero-image', `url("${sitePath(sector.heroImage)}")`);
  }

  enhanceSectorActions(sector);

  try {
    if (typeof INSTITUTIONS === 'undefined') {
      await loadSiteScript('/data/institutions.js');
    }
    renderSectorProviders(sector);
  } catch (error) {
    const grid = document.querySelector('.sector-directory-grid');
    if (grid) {
      grid.innerHTML = '<p class="sector-directory-error" role="status">Provider information could not be loaded. Please return to the Ghana CX homepage and try again.</p>';
    }
  }
}

function enhanceSectorActions(sector) {
  const card = document.querySelector('.coming-soon-card');
  if (!card || card.querySelector('.sector-action-panel')) return;

  const isActive = sector.status === 'active' && Boolean(sector.defaultFormUrl);
  const startControl = isActive
    ? `<a class="cta-primary" href="${sector.defaultFormUrl}" rel="noopener noreferrer">Start Your Experience</a>`
    : '<span class="cta-primary cta-disabled" aria-disabled="true">Start Your Experience — Coming Soon</span>';

  const panel = document.createElement('div');
  panel.className = 'sector-action-panel';
  panel.innerHTML = `
    <span class="sector-availability ${isActive ? 'is-active' : ''}">${isActive ? 'Assessment active' : 'Assessment in preparation'}</span>
    <p>${sector.respondentInstructions || 'Choose a provider and continue to the approved sector assessment.'}</p>
    <div class="sector-action-row">
      <a class="cta-secondary" href="#provider-directory">Explore Sector</a>
      ${startControl}
      <a class="cta-secondary" href="${sitePath('/')}">Return to Ghana CX</a>
    </div>
  `;
  card.prepend(panel);
}

function providerInitials(name) {
  return name
    .replace(/\([^)]*\)/g, '')
    .split(/[\s/&-]+/)
    .filter(Boolean)
    .slice(0, 3)
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

function renderSectorProviders(sector) {
  const grid = document.querySelector('.sector-directory-grid');
  const directory = document.querySelector('.sector-directory');
  if (!grid || typeof INSTITUTIONS === 'undefined') return;

  const providers = getInstitutionBySector(sector.id) || getInstitutionBySector(sector.slug) || [];
  if (directory) directory.id = 'provider-directory';

  const intro = document.querySelector('.sector-directory-header p');
  if (intro) {
    intro.textContent = `${providers.length} identified institutions and providers for the ${sector.name} experience index. Survey links remain unavailable until the approved respondent form is verified.`;
  }

  grid.innerHTML = providers.map(provider => {
    const logo = provider.logoPath
      ? `<img src="${sitePath(provider.logoPath)}" alt="${provider.name} logo" class="provider-logo" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false;">`
      : '';
    const fallbackHidden = provider.logoPath ? ' hidden' : '';
    const canStart = Boolean(provider.formUrl || sector.defaultFormUrl) && sector.status === 'active';
    const cta = canStart
      ? `<a href="${provider.formUrl || sector.defaultFormUrl}" class="provider-cta" rel="noopener noreferrer">Start Your Experience</a>`
      : '<span class="provider-cta is-disabled" aria-disabled="true">Assessment coming soon</span>';

    return `
      <article class="sector-directory-card provider-card">
        <div class="provider-logo-frame">
          ${logo}
          <span class="provider-logo-fallback"${fallbackHidden} aria-hidden="true">${providerInitials(provider.name)}</span>
        </div>
        <h3>${provider.name}</h3>
        ${provider.assetStatus === 'source-blocked' ? '<p class="provider-asset-note">Approved logo source pending</p>' : ''}
        ${cta}
      </article>
    `;
  }).join('');
}

// Update active nav link based on scroll position
function setupScrollingNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });

    // Always show Home as active if at top
    if (scrollY < 200) {
      document.querySelector('.nav-link[href="/"]')?.classList.add('active');
    }
  });
}

// Modal functions
function openFormModal() {
  const modal = document.getElementById('formModal');
  if (!modal) return;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFormModal() {
  const modal = document.getElementById('formModal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function setupMobileNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', function() {
    const isOpen = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupModalDismissal() {
  const modal = document.getElementById('formModal');
  if (!modal) return;

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeFormModal();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeFormModal();
    }
  });
}

// Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(sitePath('/sw.js')).catch(() => {});
}
