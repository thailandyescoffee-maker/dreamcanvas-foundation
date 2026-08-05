// Dream Canvas Foundation — Home page
// Minimal JS: mobile navigation toggle only, per Implementation Rules
// ("Use JavaScript only when necessary").

(function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  const header = document.querySelector('.site-header');

  if (!toggle || !nav) return;

  // Set the nav's top offset to the header's real measured height,
  // not a hardcoded guess — this is recalculated on load and on
  // resize so it can never silently drift out of sync with the
  // header's actual rendered height.
  function setHeaderHeightVar() {
    if (!header) return;
    const h = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-height', h + 'px');
  }
  setHeaderHeightVar();
  window.addEventListener('resize', setHeaderHeightVar);

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

  // Language switcher(s) — header version and mobile-nav version
  // both use the same markup pattern, so wire up every instance.
  document.querySelectorAll('.lang-switcher').forEach(function (switcher) {
    const btn = switcher.querySelector('.lang-switcher__toggle');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = switcher.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.lang-switcher.is-open').forEach(function (switcher) {
      if (!switcher.contains(e.target)) {
        switcher.classList.remove('is-open');
        switcher.querySelector('.lang-switcher__toggle').setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
