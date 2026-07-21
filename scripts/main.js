// Main application script

document.addEventListener('DOMContentLoaded', function() {
  normalizeRootLinks();
  renderSectors();
  setupScrollingNavigation();
  setupMobileNavigation();
  setupModalDismissal();
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
    const cardClass = `sector-card ${isActive ? 'active' : 'coming-soon'}`;
    const href = sitePath(`/${sector.slug}/`);
    const ariaDisabled = !isActive ? ' aria-disabled="true"' : '';

    return `
      <a href="${href}" class="${cardClass}"${ariaDisabled}>
        <div class="sector-icon">${sector.icon}</div>
        <h3>${sector.name}</h3>
        <p class="sector-description">${sector.description}</p>
        <span class="sector-status ${!isActive ? 'coming-soon' : ''}">
          ${isActive ? 'Active' : 'Coming Soon'}
        </span>
      </a>
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
