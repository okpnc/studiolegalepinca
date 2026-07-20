(function () {
  'use strict';

  function setupNavigation() {
    document.querySelectorAll('.hamburger-trigger').forEach(function (button) {
      if (!button.hasAttribute('aria-expanded')) button.setAttribute('aria-expanded', 'false');
      button.addEventListener('click', function () {
        window.setTimeout(function () {
          var isOpen = button.classList.contains('active');
          button.setAttribute('aria-expanded', String(isOpen));
        }, 0);
      });
    });
  }

  function setupAccordions() {
    document.querySelectorAll('.aree-accordion-header').forEach(function (header, index) {
      var item = header.closest('.aree-accordion-item');
      var content = item && item.querySelector('.aree-accordion-content');
      if (!item || !content) return;

      var contentId = content.id || 'area-content-' + (index + 1);
      content.id = contentId;
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');
      header.setAttribute('aria-controls', contentId);
      header.setAttribute('aria-expanded', String(item.classList.contains('open')));

      header.addEventListener('click', function () {
        window.setTimeout(updateAccordionState, 0);
      });
      header.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          header.click();
        }
      });
    });
  }

  function updateAccordionState() {
    document.querySelectorAll('.aree-accordion-item').forEach(function (item) {
      var header = item.querySelector('.aree-accordion-header');
      if (header) header.setAttribute('aria-expanded', String(item.classList.contains('open')));
    });
  }

  function updateCopyright() {
    document.querySelectorAll('.pinca-footer-bottom span').forEach(function (element) {
      element.textContent = '© ' + new Date().getFullYear() + ' Studio Legale Pinca. Tutti i diritti riservati.';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupNavigation();
    setupAccordions();
    updateCopyright();
  });
}());
