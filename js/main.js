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

// Back to Top — injected once per page so every page (in every
// language) gets an identical, consistent button without needing
// to edit each HTML file.
(function () {
  var labels = {
    en: 'Back to top',
    ko: '맨 위로',
    th: 'กลับไปด้านบน',
    ru: 'Наверх',
    my: 'အပေါ်သို့ ပြန်သွားရန်'
  };
  var lang = (document.documentElement.lang || 'en').split('-')[0];
  var label = labels[lang] || labels.en;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', label);
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(btn);

  var visibleThreshold = 500;
  var ticking = false;
  function updateVisibility() {
    if (window.scrollY > visibleThreshold) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateVisibility);
      ticking = true;
    }
  }, { passive: true });
  updateVisibility();

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
