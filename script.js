// Minimal JS: navigation toggle, set year, simple reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
    });
  }

  // Set current year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Small reveal-on-scroll
  const revealEls = document.querySelectorAll('.section, .card, .project, .pricing-card, .team-card, .mini-card, blockquote');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // optionally unobserve for performance
        io.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));
});
