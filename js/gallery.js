/* ============================================================
   GALLERY.JS
   Three layers (all in-page, no navigation):
   1. Full Gallery Page  — all couples grid (View Full Gallery btn)
   2. Story Page         — single couple: big hero + masonry grid
   3. Lightbox           — fullscreen single photo (tap from story grid)

   HOW TO ADD PHOTOS:
   • Put photos in /photos/
   • Replace  src: null  →  src: 'photos/your-file.jpg'
   • Replace  hero: null →  hero: 'photos/your-hero.jpg'
   ============================================================ */

const GALLERY_DATA = {

  'heli-shyam': {
    couple:   'Heli & Shyam',
    category: 'Wedding · Rajkot',
    date:     '2025',
    hero:     'photos/wedding-1-main.jpg',
    heroGrad: 'linear-gradient(160deg,#f5d0c6 0%,#e8bdb4 100%)',
    images: [
      { src: 'photos/wedding-1-sub.jpg', caption: 'The Ceremony'    },
      { src: 'photos/wedding-2-sub.jpg', caption: 'Mandap Moments'  },
      { src: 'photos/wedding-6-sub.jpg', caption: 'Varmala'         },
      { src: 'photos/wedding-4-sub.jpg', caption: 'Family Portraits' },
      { src: 'photos/wedding-5-sub.jpg', caption: 'Reception'       },
      { src: 'photos/wedding-3-sub.jpg', caption: 'Candid Joy'      },
       { src: 'photos/wedding-7-sub.jpg', caption: 'Reception'       },
      { src: 'photos/wedding-8-sub.jpg', caption: 'Candid Joy'      },
    ]
  },

  'riki-jay': {
    couple:   'Nensi & Aryan',
    category: 'Pre-Wedding',
    date:     '2023',
    hero:     'photos/prewedding-2-main.jpg',
    heroGrad: 'linear-gradient(160deg,#faddd6 0%,#f0c4b8 100%)',
    images: [
      { src: 'photos/prewedding-1-sub1.jpg', caption: 'Golden Hour' },
      { src: 'photos/prewedding-2-sub1.jpg', caption: 'City Stroll' },
      { src: 'photos/prewedding-3-sub1.jpg', caption: 'Together'    },
      { src: 'photos/prewedding-4-sub1.jpg', caption: 'Laughing'    },
      { src: 'photos/prewedding-5-sub1.jpg', caption: 'Golden Hour' },
      { src: 'photos/prewedding-6-sub1.jpg', caption: 'City Stroll' },
      { src: 'photos/prewedding-7-sub1.jpg', caption: 'Together'    },
      { src: 'photos/prewedding-8-sub1.jpg', caption: 'Laughing'    },
    ]
  },

  'vairag-krisha': {
    couple:   'Vairag & Krisha',
    category: 'Wedding',
    date:     '2024',
    hero:     'photos/wedding-2-main.jpg',
    heroGrad: 'linear-gradient(180deg,#f7ddd6 0%,#ecc4b8 100%)',
    images: [
      { src: 'photos/wedding-1-sub1.jpg', caption: 'Ceremony'         },
      { src: 'photos/wedding-2-sub1.jpg', caption: 'Couple Portraits' },
      { src: 'photos/wedding-3-sub1.jpg', caption: 'Joy'              },
      { src: 'photos/wedding-4-sub1.jpg', caption: 'Details'          },
      { src: 'photos/wedding-5-sub1.jpg', caption: 'Reception Night'  },
       { src: 'photos/wedding-6-sub1.jpg', caption: 'Joy'              },
      { src: 'photos/wedding-7-sub1.jpg', caption: 'Details'          },
      { src: 'photos/wedding-8-sub1.jpg', caption: 'Reception Night'  },
    ]
  },

  'karan-bhoomi': {
    couple:   'Divyaraj & Aeshvari',
    category: 'Pre-Wedding',
    date:     '2024',
    hero:     'photos/prewedding-2-main.jpg',
    heroGrad: 'linear-gradient(140deg,#fae6e0 0%,#f0d4cc 100%)',
    images: [
      { src: 'photos/prewedding-1-sub.jpg', caption: 'Sunset'    },
      { src: 'photos/prewedding-2-sub.jpg', caption: 'Lake Side' },
      { src: 'photos/prewedding-3-sub.jpg', caption: 'Close Up'  },
      { src: 'photos/prewedding-4-sub.jpg', caption: 'Romance'   },
       { src: 'photos/prewedding-5-sub.jpg', caption: 'Sunset'    },
      { src: 'photos/prewedding-6-sub.jpg', caption: 'Lake Side' },
      { src: 'photos/prewedding-7-sub.jpg', caption: 'Close Up'  },
      { src: 'photos/prewedding-8-sub.jpg', caption: 'Romance'   },
    ]
  },

  'jahnvi-dev': {
    couple:   'Jahnvi & Dev',
    category: 'Engagement',
    date:     '2024',
    hero:     'photos/jahnvi-dev-collage.jpg',
    heroGrad: 'linear-gradient(160deg,#fae6e0 0%,#f0d4cc 100%)',
    images: [
      { src: 'photos/jahnvi-dev-1.jpg',       caption: 'The Ring'  },
      { src: 'photos/jahnvi-dev-2.jpg',       caption: 'Together'  },
      { src: 'photos/jahnvi-dev-3.jpg',       caption: 'Joy'       },
      { src: 'photos/jahnvi-dev-4.jpg',       caption: 'The Ring'  },
      { src: 'photos/jahnvi-dev-5.jpg',       caption: 'Together'  },
      { src: 'photos/jahnvi-dev-6.jpg',       caption: 'Joy'       },
      { src: 'photos/jahnvi-dev-7.jpg',       caption: 'Joy'       },
      { src: 'photos/jahnvi-dev-8.jpg',       caption: 'Joy'       },
      { src: 'photos/jahnvi-dev-collage.jpg', caption: 'Our Story' },
    ]
  },

  'kaira-vansh' : {
    couple:   'Kaira & Vansh',
    category: 'cocktailparty',
    date:     '2025',
    hero:     'photos/cocktail-1-main.jpg',
    heroGrad: 'linear-gradient(160deg,#fae6e0 0%,#f0d4cc 100%)',
    images: [
      { src: 'photos/cocktail-1-sub.jpg',       caption: 'The Ring'  },
      { src: 'photos/cocktail-2-sub.jpg',       caption: 'Together'  },
      { src: 'photos/cocktail-3-sub.jpg',       caption: 'Joy'       },
      { src: 'photos/cocktail-4-sub.jpg',       caption: 'The Ring'  },
      { src: 'photos/cocktail-5-sub.jpg',       caption: 'Together'  },
      { src: 'photos/cocktail-6-sub.jpg',       caption: 'Joy'       },
      { src: 'photos/cocktail-7-sub.jpg',       caption: 'Joy'       },
      { src: 'photos/cocktail-8-sub.jpg',       caption: 'Joy'       },
    ]
  }

};

/* ════════════════════════════════════════════════════════════
   LAYER 2 — STORY PAGE  (big hero + masonry grid for one couple)
════════════════════════════════════════════════════════════ */

let _storyKey            = null;
let _returnToFullGallery = false;

const storyPage   = document.getElementById('storyPage');
const storyBody   = storyPage?.querySelector('.story-body');
const storyHero   = document.getElementById('storyHero');
const storyCouple = document.getElementById('storyCouple');
const storyCat    = document.getElementById('storyCat');
const storyDate   = document.getElementById('storyDate');
const storyGrid   = document.getElementById('storyGrid');

function openGallery(key) {
  const data = GALLERY_DATA[key];
  if (!data) return;
  _storyKey = key;

  /* ── Desktop hero (background-image, hidden on mobile via CSS) ── */
  const heroSrc = data.hero || (data.images.find(i => i.src)?.src) || null;
  if (heroSrc) {
    storyHero.style.cssText = `background:url('${heroSrc}') center/cover no-repeat;`;
  } else {
    storyHero.style.cssText = `background:${data.heroGrad};`;
  }

  /* ── Mobile hero strip: 3 portrait tiles injected before meta bar ── */
  // Remove any old strip
  const oldStrip = storyPage.querySelector('.story-mobile-hero');
  if (oldStrip) oldStrip.remove();

  const mobileStrip = document.createElement('div');
  mobileStrip.className = 'story-mobile-hero';
  // Use ALL images for the slider (not just first 3)
  data.images.forEach((img) => {
    const cell = document.createElement('div');
    cell.className = 'story-mobile-hero-cell';
    if (img.src) {
      const el = document.createElement('img');
      el.src = img.src; el.alt = data.couple; el.loading = 'eager';
      cell.appendChild(el);
    } else {
      const ph = document.createElement('div');
      ph.className = 'story-mobile-hero-cell-ph';
      ph.style.cssText = `background:${img.gradient};width:100%;height:100%;`;
      cell.appendChild(ph);
    }
    mobileStrip.appendChild(cell);
  });

  // Dot indicators
  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'story-hero-dots';
  data.images.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'story-hero-dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(dot);
  });
  mobileStrip.appendChild(dotsWrap);

  // Sync dots to scroll position
  mobileStrip.addEventListener('scroll', () => {
    const cellW = mobileStrip.querySelector('.story-mobile-hero-cell')?.offsetWidth || mobileStrip.clientWidth;
    const idx = Math.round(mobileStrip.scrollLeft / cellW);
    dotsWrap.querySelectorAll('.story-hero-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  }, { passive: true });
  // Insert after story-nav, before story-body content (right at top of body)
  storyBody.insertBefore(mobileStrip, storyBody.firstChild);

  /* meta */
  storyCouple.textContent = data.couple;
  storyCat.textContent    = data.category;
  storyDate.textContent   = data.date;

  /* build masonry grid */
  storyGrid.innerHTML = '';
  data.images.forEach((img, i) => {
    const cell = document.createElement('div');
    cell.className = 'story-grid-cell';
    cell.onclick   = () => openLightbox(key, i);

    if (img.src) {
      const el   = document.createElement('img');
      el.src     = img.src;
      el.alt     = img.caption || data.couple;
      el.loading = i < 4 ? 'eager' : 'lazy';
      cell.appendChild(el);
    } else {
      cell.style.background = img.gradient;
      const lbl = document.createElement('span');
      lbl.className   = 'story-grid-caption';
      lbl.textContent = img.caption || '';
      cell.appendChild(lbl);
    }

    const icon = document.createElement('div');
    icon.className = 'story-grid-icon';
    icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`;
    cell.appendChild(icon);

    storyGrid.appendChild(cell);
  });

  storyPage.classList.add('open');
  document.body.style.overflow = 'hidden';
  storyPage.scrollTop = 0;  /* reset scroll on open */
}

function closeStoryPage() {
  storyPage.classList.remove('open');
  if (_returnToFullGallery) {
    _returnToFullGallery = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const fg = document.getElementById('fullGalleryPage');
      if (fg) fg.classList.add('open');
    }, 80);
  } else {
    document.body.style.overflow = '';
  }
}

/* ════════════════════════════════════════════════════════════
   LAYER 3 — LIGHTBOX  (fullscreen single photo)
════════════════════════════════════════════════════════════ */

let _lbKey      = null;
let _lbIdx      = 0;
let _lbTouchX   = 0;
let _lbDragging = false;
let _lbDelta    = 0;

const lbPage    = document.getElementById('lightboxPage');
const lbStrip   = document.getElementById('lbStrip');
const lbThumbs  = document.getElementById('lbThumbs');
const lbCounter = document.getElementById('lbCounter');

function openLightbox(key, startIdx) {
  const data = GALLERY_DATA[key];
  if (!data) return;
  _lbKey = key;
  _lbIdx = startIdx || 0;

  lbStrip.innerHTML = '';
  data.images.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'lb-slide';
    if (img.src) {
      const el = document.createElement('img');
      el.src = img.src; el.alt = img.caption || '';
      el.loading = i === startIdx ? 'eager' : 'lazy';
      slide.appendChild(el);
    } else {
      const ph = document.createElement('div');
      ph.className = 'lb-placeholder';
      ph.style.background = img.gradient;
      ph.innerHTML = `<span class="lb-cap">${img.caption || ''}</span>`;
      slide.appendChild(ph);
    }
    lbStrip.appendChild(slide);
  });

  lbThumbs.innerHTML = '';
  data.images.forEach((img, i) => {
    const th = document.createElement('div');
    th.className = 'lb-thumb' + (i === _lbIdx ? ' active' : '');
    th.onclick   = () => lbGoTo(i);
    if (img.src) {
      const el = document.createElement('img');
      el.src = img.src; el.loading = 'lazy';
      th.appendChild(el);
    } else {
      const ph = document.createElement('div');
      ph.className = 'lb-thumb-ph';
      ph.style.background = img.gradient;
      th.appendChild(ph);
    }
    lbThumbs.appendChild(th);
  });

  lbPage.classList.add('open');
  document.body.style.overflow = 'hidden';
  lbUpdateStrip();
  lbUpdateCounter();
}

function closeLightbox() {
  lbPage.classList.remove('open');
  document.body.style.overflow = 'hidden'; /* keep story page locked */
}

function lbGoTo(idx) {
  const n = GALLERY_DATA[_lbKey].images.length;
  _lbIdx = (idx + n) % n;
  lbUpdateStrip(); lbUpdateCounter(); lbUpdateThumbs();
}
function lbNext() { lbGoTo(_lbIdx + 1); }
function lbPrev() { lbGoTo(_lbIdx - 1); }

function lbUpdateStrip() {
  lbStrip.style.transition = _lbDragging ? 'none' : 'transform .35s cubic-bezier(.4,0,.2,1)';
  lbStrip.style.transform  = `translateX(calc(-${_lbIdx * 100}% + ${_lbDragging ? _lbDelta : 0}px))`;
}
function lbUpdateCounter() {
  lbCounter.textContent = `${_lbIdx + 1} / ${GALLERY_DATA[_lbKey].images.length}`;
}
function lbUpdateThumbs() {
  const ths = lbThumbs.querySelectorAll('.lb-thumb');
  ths.forEach((t, i) => t.classList.toggle('active', i === _lbIdx));
  ths[_lbIdx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

lbStrip.addEventListener('touchstart', e => {
  _lbTouchX = e.changedTouches[0].clientX;
  _lbDragging = true; _lbDelta = 0;
}, { passive: true });
lbStrip.addEventListener('touchmove', e => {
  if (!_lbDragging) return;
  _lbDelta = e.changedTouches[0].clientX - _lbTouchX;
  lbUpdateStrip();
}, { passive: true });
lbStrip.addEventListener('touchend', e => {
  _lbDragging = false;
  const dx = e.changedTouches[0].clientX - _lbTouchX;
  if (Math.abs(dx) > 50) { dx < 0 ? lbNext() : lbPrev(); }
  else { _lbDelta = 0; lbUpdateStrip(); }
  _lbDelta = 0;
}, { passive: true });

/* ════════════════════════════════════════════════════════════
   LAYER 1 — FULL GALLERY PAGE  (all couples grid)
════════════════════════════════════════════════════════════ */

function openFullGalleryPage() {
  const fg = document.getElementById('fullGalleryPage');
  if (!fg) return;
  fg.classList.add('open');
  document.body.style.overflow = 'hidden';
  filterFullGallery('all', fg.querySelector('.fg-filter-btn'));
  fg.querySelector('.fg-body').scrollTop = 0;
}

function closeFullGalleryPage() {
  const fg = document.getElementById('fullGalleryPage');
  if (!fg) return;
  fg.classList.remove('open');
  document.body.style.overflow = '';
}

function openGalleryFromFull(key) {
  const fg = document.getElementById('fullGalleryPage');
  if (fg) fg.classList.remove('open');
  _returnToFullGallery = true;
  setTimeout(() => openGallery(key), 60);
}

function filterFullGallery(cat, btn) {
  const fg = document.getElementById('fullGalleryPage');
  if (!fg) return;
  fg.querySelectorAll('.fg-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  fg.querySelectorAll('.fg-couple-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.fgCat === cat) ? '' : 'none';
  });
}

/* ── Global keyboard ── */
document.addEventListener('keydown', e => {
  if (lbPage?.classList.contains('open')) {
    if (e.key === 'ArrowRight') lbNext();
    if (e.key === 'ArrowLeft')  lbPrev();
    if (e.key === 'Escape')     closeLightbox();
    return;
  }
  if (storyPage?.classList.contains('open') && e.key === 'Escape') {
    closeStoryPage(); return;
  }
  const fg = document.getElementById('fullGalleryPage');
  if (fg?.classList.contains('open') && e.key === 'Escape') {
    closeFullGalleryPage();
  }
});