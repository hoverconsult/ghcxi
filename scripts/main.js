// Main application script

document.addEventListener('DOMContentLoaded', function() {
  renderSectors();
  setupScrollingNavigation();
});

// Render sectors grid dynamically
function renderSectors() {
  const grid = document.getElementById('sectors-grid');
  if (!grid || !BCXI_CONFIG || !BCXI_CONFIG.sectors) return;

  grid.innerHTML = BCXI_CONFIG.sectors.map(sector => {
    const isActive = sector.status === 'active';
    const cardClass = `sector-card ${isActive ? 'active' : 'coming-soon'}`;
    const href = `/${sector.slug}/`;
    const onClick = !isActive ? 'return false;' : '';

    return `
      <a href="${href}" class="${cardClass}" onclick="${onClick}">
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
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFormModal() {
  const modal = document.getElementById('formModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
});

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('formModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeFormModal();
      }
    });
  }
});

// Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
