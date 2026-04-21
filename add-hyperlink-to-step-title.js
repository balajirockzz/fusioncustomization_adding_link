// AI Generated Code by Deloitte + Cursor (BEGIN)

define([], () => {
  'use strict';

  class PageModule {

    constructor() {
      this._observer = null;
    }

    startHyperlinkObserver() {
      this._injectAllLinks();

      if (this._observer) {
        this._observer.disconnect();
      }

      this._observer = new MutationObserver(() => {
        this._injectAllLinks();
      });

      this._observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    _injectAllLinks() {
      this.addHyperlinkToRegisterSupplier();
    }

    addHyperlinkToRegisterSupplier() {
      const registerBtn = document.querySelector(
        'button[aria-label="Register Supplier"]'
      );

      if (!registerBtn) {
        return;
      }

      const parentEl = registerBtn.parentElement;

      if (parentEl.querySelector('.custom-register-supplier-link')) {
        return;
      }

      const link = document.createElement('a');
      link.href = 'https://www.google.com';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'go to google';
      link.className = 'custom-register-supplier-link';

      link.style.color = '#ffffff';
      link.style.textDecoration = 'underline';
      link.style.marginRight = '16px';
      link.style.whiteSpace = 'nowrap';
      link.style.fontSize = '14px';
      link.style.cursor = 'pointer';

      link.addEventListener('mouseenter', () => {
        link.style.opacity = '0.8';
      });
      link.addEventListener('mouseleave', () => {
        link.style.opacity = '1';
      });

      parentEl.insertBefore(link, registerBtn);
    }

  }

  return PageModule;
});

// AI Generated Code by Deloitte + Cursor (END)
