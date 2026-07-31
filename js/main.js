// Dream Canvas Foundation — Home page
// Minimal JS: mobile navigation toggle only, per Implementation Rules
// ("Use JavaScript only when necessary").

(function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close menu when a nav link is activated (mobile)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    });
  });
})();
