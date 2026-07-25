// ==========================================================================
// Cheesecake Factory Menu Guide — Shared JavaScript
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  initBackToTop();
  initAccordion();
});

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
