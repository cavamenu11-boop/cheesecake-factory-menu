// ==========================================================================
// Cheesecake Factory Menu Guide — Shared JavaScript
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  initBackToTop();
  initAccordion();
  initCouponModal();
});

function initCouponModal() {
  var buttons = document.querySelectorAll('.coupon-card [data-modal-trigger]');
  var overlay = document.getElementById('coupon-modal-overlay');
  if (!buttons.length || !overlay) return;

  var titleEl = document.getElementById('coupon-modal-title');
  var codeEl = document.getElementById('coupon-modal-code');
  var discountEl = document.getElementById('coupon-modal-discount');
  var whereEl = document.getElementById('coupon-modal-where');
  var statusEl = document.getElementById('coupon-modal-status');
  var verifiedEl = document.getElementById('coupon-modal-verified');
  var closeBtn = overlay.querySelector('.modal-close');

  function openModal(btn) {
    titleEl.textContent = btn.dataset.name || '';
    codeEl.textContent = btn.dataset.code || '';
    discountEl.textContent = btn.dataset.discount || '';
    whereEl.textContent = btn.dataset.where || '';
    statusEl.textContent = btn.dataset.status || '';
    verifiedEl.textContent = btn.dataset.verified || '';
    overlay.classList.add('is-open');
  }

  function closeModal() {
    overlay.classList.remove('is-open');
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(btn);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
}

function initAccordion() {
  var triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var panel = document.getElementById(trigger.getAttribute('aria-controls'));
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';

      trigger.setAttribute('aria-expanded', !isOpen);
      panel.setAttribute('data-open', !isOpen);
    });
  });
}

function initMobileNav() {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}

function initBackToTop() {
  var btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
