// Sector-specific scripts

document.addEventListener('DOMContentLoaded', function() {
  normalizeRootLinks();

  // Determine sector from URL
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const sectorSlug = pathSegments.includes('banks') ? 'banks' : pathSegments[0];

  if (window.location.pathname.includes('/banks/review.html')) {
    handleReviewPage();
  } else if (sectorSlug === 'banks' || sectorSlug === 'sectors') {
    renderBankGrid();
    setupSearchFilter();
  }
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

// Render bank grid
function renderBankGrid() {
  const grid = document.getElementById('bank-grid');
  const noResults = document.getElementById('no-results');

  if (!grid || !INSTITUTIONS || !INSTITUTIONS.banking) return;

  const banks = INSTITUTIONS.banking;

  grid.innerHTML = banks.map(bank => {
    const brand = bank.brand || {};
    const style = [
      brand.primary ? `--bank-primary:${brand.primary}` : '',
      brand.accent ? `--bank-accent:${brand.accent}` : '',
      brand.dark ? `--bank-dark:${brand.dark}` : ''
    ].filter(Boolean).join(';');

    return `
      <a href="${sitePath(`/banks/review.html?institution=${bank.slug}`)}" class="institution-card" data-bank-name="${bank.name.toLowerCase()}" style="${style}">
        <img src="${sitePath(bank.logoPath)}" alt="${bank.name}" class="institution-logo" onerror="this.closest('.institution-card').classList.add('logo-missing'); this.remove();">
        <div class="institution-name">${bank.name}</div>
        <div class="institution-cta">Review Experience</div>
      </a>
    `;
  }).join('');

  if (noResults) {
    noResults.style.display = 'none';
  }
}

// Search filter functionality
function setupSearchFilter() {
  const searchInput = document.getElementById('bank-search');
  const grid = document.getElementById('bank-grid');
  const noResults = document.getElementById('no-results');

  if (!searchInput || !grid) return;

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    const cards = grid.querySelectorAll('.institution-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const bankName = card.getAttribute('data-bank-name');
      if (bankName.includes(query)) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });

  // Keep keyboard convenience without pulling the first viewport down to the search field.
  try {
    searchInput.focus({ preventScroll: true });
  } catch (error) {
    searchInput.focus();
    window.scrollTo(0, 0);
  }
}

// Handle review page
function handleReviewPage() {
  const params = new URLSearchParams(window.location.search);
  const institutionSlug = params.get('institution');

  if (!institutionSlug) {
    window.location.href = sitePath('/banks/');
    return;
  }

  const institution = getInstitutionBySlug('banking', institutionSlug);

  if (!institution) {
    window.location.href = sitePath('/banks/');
    return;
  }

  // Update page content with institution details
  updateReviewPage(institution);
  applyInstitutionTheme(institution);

  // Set up form submission
  const startButton = document.getElementById('start-assessment');
  const changeButton = document.getElementById('change-bank');

  if (startButton) {
    startButton.addEventListener('click', function(e) {
      e.preventDefault();
      // Redirect to Google Form
      // For now, just open the form URL
      window.location.href = institution.formUrl;
    });
  }

  if (changeButton) {
    changeButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = sitePath('/banks/');
    });
  }
}

// Update review page with institution details
function updateReviewPage(institution) {
  const titleEl = document.querySelector('.review-container h1');
  const nameEl = document.getElementById('review-institution-name');
  const descriptionEl = document.querySelector('.review-description');
  const logoEl = document.getElementById('review-institution-logo');
  const heroEl = document.getElementById('review-hero-image');
  const galleryEl = document.getElementById('review-asset-gallery');
  const assetsIntroEl = document.getElementById('review-assets-intro');

  if (titleEl) {
    titleEl.textContent = 'Review Your Experience With';
  }

  if (nameEl) {
    nameEl.textContent = institution.name;
  }

  if (descriptionEl) {
    descriptionEl.textContent = `Your experience matters. Complete the BCXI Banking Customer Experience assessment based on your interactions with ${institution.name}.`;
  }

  if (logoEl) {
    logoEl.src = sitePath(institution.logoPath);
    logoEl.alt = `${institution.name} logo`;
    logoEl.hidden = false;
  }

  if (heroEl && institution.heroPath) {
    heroEl.src = sitePath(institution.heroPath);
    heroEl.alt = `${institution.name} customer experience welcome image`;
    heroEl.hidden = false;
  }

  if (assetsIntroEl) {
    assetsIntroEl.textContent = `A branded ${institution.name} experience page using the approved logo and available welcome image assets.`;
  }

  if (galleryEl) {
    const assets = [
      { label: 'Bank identity', src: institution.logoPath, alt: `${institution.name} logo` },
      { label: 'Welcome image', src: institution.heroPath, alt: `${institution.name} welcome image` }
    ].filter(asset => asset.src);

    galleryEl.innerHTML = assets.map(asset => `
      <figure class="bank-asset-card">
        <img src="${sitePath(asset.src)}" alt="${asset.alt}" loading="lazy" decoding="async">
        <figcaption>${asset.label}</figcaption>
      </figure>
    `).join('');
  }

  // Update page title
  document.title = `Review ${institution.name} | BCXI Banking`;

  // Set up breadcrumb if it exists
  const breadcrumb = document.querySelector('.breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <div class="container">
        <a href="${sitePath('/')}">BCXI</a> / <a href="${sitePath('/banks/')}">Banking</a> / <span>${institution.name}</span>
      </div>
    `;
  }
}

function applyInstitutionTheme(institution) {
  const brand = institution.brand || {};
  const root = document.documentElement;

  if (brand.primary) root.style.setProperty('--bank-primary', brand.primary);
  if (brand.accent) root.style.setProperty('--bank-accent', brand.accent);
  if (brand.dark) root.style.setProperty('--bank-dark', brand.dark);

  document.body.classList.add('bank-branded-page');
  document.body.dataset.bank = institution.slug;
}

// Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(sitePath('/sw.js')).catch(() => {});
}
