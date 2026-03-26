/* ============================================================
   FULLGALLERY.JS — In-Page Full Portfolio Gallery
   Opens over the main site (same page, no navigation away).
   Shows all couples in a masonry-style grid.
   Clicking a couple card opens the lightbox (gallery.js).
   ============================================================ */

const fullGalleryPage = document.getElementById('fullGalleryPage');

/* ── Open full gallery page ── */
function openFullGalleryPage() {
  fullGalleryPage.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Reset filter to "All" each time it opens
  filterFullGallery('all', fullGalleryPage.querySelector('.fg-filter-btn'));
  // Scroll the full-gallery body to top
  const fgBody = fullGalleryPage.querySelector('.fg-body');
  if (fgBody) fgBody.scrollTop = 0;
}

/* ── Close full gallery page ── */
function closeFullGalleryPage() {
  fullGalleryPage.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Open couple lightbox from within full gallery ── */
function openGalleryFromFull(key) {
  // Close full gallery first, then open couple lightbox on top
  fullGalleryPage.classList.remove('open');
  // Small delay so transitions don't clash
  setTimeout(() => {
    openGallery(key);
    // When lightbox is closed, re-open full gallery
    _pendingReturnToFull = true;
  }, 50);
}

/* Track if we should return to full gallery after lightbox closes */
let _pendingReturnToFull = false;

/* Patch closeGallery to return to full gallery if opened from there */
const _origCloseGallery = closeGallery;
window.closeGallery = function () {
  _origCloseGallery();
  if (_pendingReturnToFull) {
    _pendingReturnToFull = false;
    setTimeout(() => {
      fullGalleryPage.classList.add('open');
      document.body.style.overflow = 'hidden';
    }, 100);
  }
};

/* ── Filter couples grid ── */
function filterFullGallery(cat, btn) {
  // Update active button
  fullGalleryPage.querySelectorAll('.fg-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // Show / hide cards
  fullGalleryPage.querySelectorAll('.fg-couple-card').forEach(card => {
    const match = cat === 'all' || card.dataset.fgCat === cat;
    card.style.display = match ? '' : 'none';
  });
}

/* ── Keyboard: Escape closes full gallery ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && fullGalleryPage.classList.contains('open')) {
    closeFullGalleryPage();
  }
});