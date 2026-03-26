/* ============================================================
   MAIN.JS — Site interactions (Mobile-First)
   ============================================================ */

/* ── Sticky nav ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Tablet hamburger ── */
const hamburger = document.getElementById('hamburger');
const drawer    = document.getElementById('navDrawer');

hamburger?.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  drawer.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

function closeDrawer() {
  hamburger?.classList.remove('open');
  drawer?.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  if (drawer?.classList.contains('open') && !drawer.contains(e.target) && !hamburger.contains(e.target)) {
    closeDrawer();
  }
});

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

/* ── Portfolio filter ── */
function filterPortfolio(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.classList.toggle('hidden', cat !== 'all' && item.dataset.cat !== cat);
  });
}

/* ── "View Full Gallery" button — opens in-page full gallery ── */
function openFullGallery() {
  // Alias kept for backwards compatibility — calls the new full gallery page
  openFullGalleryPage();
}

/* ── Mobile top icon nav: highlight active section ── */
const sectionIds     = ['home', 'portfolio', 'services', 'about', 'testimonials', 'contact'];
const mobileIconBtns = document.querySelectorAll('.mobile-icon-btn:not(.wp)');

window.addEventListener('scroll', () => {
  let current = 'home';
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 80) current = id;
  });
  mobileIconBtns.forEach(btn => {
    const href = btn.getAttribute('href');
    btn.classList.toggle('active', href === '#' + current);
  });
}, { passive: true });

/* ── Smooth scroll with offset for fixed header ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hasAttribute('data-email')) return; // skip email links
    const id     = this.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = window.innerWidth <= 768 ? 56 : 80;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    closeDrawer();
  });
});

/* ── Hero slider — mobile only, desktop stays as CSS grid ── */
const heroMosaic = document.querySelector('.hero-mosaic');
const sliderDots = document.querySelectorAll('.hero-slider-dot');

if (heroMosaic && sliderDots.length) {
  const realSlides = Array.from(heroMosaic.querySelectorAll('.hero-mosaic-cell'));
  const realCount  = realSlides.length;

  let _heroIdx      = 0;
  let _heroTimer    = null;
  let _heroMoving   = false;
  let _heroActive   = false;
  let _clonesAdded  = false;

  function updateDots(idx) {
    sliderDots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  function heroScrollTo(idx, animate) {
    heroMosaic.style.scrollBehavior = animate ? 'smooth' : 'auto';
    heroMosaic.scrollLeft = idx * heroMosaic.clientWidth;
    if (!animate) heroMosaic.style.scrollBehavior = '';
  }

  function initMobileSlider() {
    if (_clonesAdded) return;
    _clonesAdded = true;

    // Add clones for infinite loop
    const cFirst = realSlides[0].cloneNode(true);
    const cLast  = realSlides[realCount - 1].cloneNode(true);
    cFirst.setAttribute('aria-hidden', 'true');
    cLast.setAttribute('aria-hidden', 'true');
    heroMosaic.appendChild(cFirst);
    heroMosaic.insertBefore(cLast, realSlides[0]);

    // Jump to first real slide (index 1)
    _heroIdx = 1;
    heroMosaic.style.scrollBehavior = 'auto';
    heroMosaic.scrollLeft = heroMosaic.clientWidth;
    heroMosaic.style.scrollBehavior = '';
    updateDots(0);
  }

  function destroyMobileSlider() {
    if (!_clonesAdded) return;
    // Remove clone cells
    heroMosaic.querySelectorAll('[aria-hidden="true"]').forEach(el => el.remove());
    _clonesAdded = false;
    heroMosaic.scrollLeft = 0;
  }

  function heroAutoNext() {
    if (_heroActive || _heroMoving) return;
    _heroMoving = true;
    _heroIdx++;
    heroScrollTo(_heroIdx, true);
    setTimeout(() => {
      if (_heroIdx >= realCount + 1) {
        _heroIdx = 1;
        heroScrollTo(_heroIdx, false);
      }
      updateDots((_heroIdx - 1 + realCount) % realCount);
      _heroMoving = false;
    }, 420);
  }

  heroMosaic.addEventListener('scrollend', () => {
    if (_heroActive && _clonesAdded) {
      _heroIdx = Math.round(heroMosaic.scrollLeft / heroMosaic.clientWidth);
      if (_heroIdx === 0)             { _heroIdx = realCount; heroScrollTo(_heroIdx, false); }
      else if (_heroIdx >= realCount + 1) { _heroIdx = 1;    heroScrollTo(_heroIdx, false); }
      updateDots((_heroIdx - 1 + realCount) % realCount);
    }
  });

  heroMosaic.addEventListener('touchstart', () => { _heroActive = true;  clearInterval(_heroTimer); }, { passive: true });
  heroMosaic.addEventListener('touchend',   () => { _heroActive = false; startTimer(); },              { passive: true });

  function startTimer() {
    clearInterval(_heroTimer);
    _heroTimer = setInterval(heroAutoNext, 3000);
  }

  function handleResize() {
    if (window.innerWidth <= 768) {
      initMobileSlider();
      startTimer();
    } else {
      clearInterval(_heroTimer);
      destroyMobileSlider();
    }
  }

  // Init
  handleResize();
  window.addEventListener('resize', handleResize, { passive: true });
}

/* ── Add top padding to body for fixed nav on mobile ── */
function setBodyPadding() {
  const navHeight = document.getElementById('nav')?.offsetHeight || 56;
  const heroRight = document.querySelector('.hero-right');
  const hero      = document.querySelector('.hero');

  // Always clear marginTop — we never shift hero-right separately
  if (heroRight) heroRight.style.marginTop = '';

  if (window.innerWidth <= 768) {
    // On mobile the photo strip is order:-1 (top), so pad the whole hero
    if (hero) hero.style.paddingTop = navHeight + 'px';
  } else {
    if (hero) hero.style.paddingTop = '';
  }
}
window.addEventListener('resize', setBodyPadding, { passive: true });
setBodyPadding();