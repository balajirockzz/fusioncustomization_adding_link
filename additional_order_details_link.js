// AI Generated Code by Deloitte + Cursor (BEGIN)
define([], () => {
  'use strict';

  class PageModule {
    constructor() {
      this._observer = null;
    }

    addHyperlinkNextToAdditionalOrderDetails() {
      const target = this._findAdditionalOrderDetailsLink();

      if (target) {
        this._injectLink(target);
        return;
      }

      this._observeDOM();
    }

    _observeDOM() {
      if (this._observer) {
        return;
      }

      this._observer = new MutationObserver((mutations) => {
        const target = this._findAdditionalOrderDetailsLink();
        if (!target) {
          return;
        }

        this._injectLink(target);
        this._disconnectObserver();
      });

      this._observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    _disconnectObserver() {
      if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
      }
    }

    _injectLink(additionalOrderDetailsLink) {
      const parentDiv = additionalOrderDetailsLink.closest('div');

      if (
        parentDiv &&
        parentDiv.querySelector('.custom-additional-order-link')
      ) {
        return;
      }

      const orderNumber = this._extractOrderNumberFromTitle();
      if (!orderNumber) {
        return;
      }

      const bipParams = JSON.stringify({
        '_xmode': '4',
        '_sTkn': '581bc07919cddfb0a49',
        '_xiasynch': '',
        '_xpf': '',
        '_xpt': '0',
        '_dFlag': 'false',
        '_edIndex': '0',
        '_dIndex': '0',
        '_rToken': '',
        '_ranDiag': 'false',
        '_xdo': '%2FCustom%2FTeradyne%2FReports%2FOM%2FOrder_Acknowledgement_Report%2FTER_ORDER_ACKNOWLEDGEMENT_RPT.xdo',
        '_paramsp_order_number': orderNumber,
        '_xt': 'Acknowledgement_RPT',
        '_xf': 'pdf',
        '_xautorun': 'true'
      });

      const separator = document.createElement('span');
      separator.textContent = ' | ';
      separator.style.color = '#6c757d';
      separator.style.margin = '0 4px';
      separator.className = 'custom-additional-order-link-separator';

      const link = document.createElement('a');
      link.href = 'https://terfusionapp-icbkjb-dev1.fa.ocs.oraclecloud.com:443/analytics/saw.dll?bipublisherEntry&Action=open&itemType=.xdo&bipPath=%2FCustom%2FTeradyne%2FReports%2FOM%2FOrder_Acknowledgement_Report%2FTER_ORDER_ACKNOWLEDGEMENT_RPT.xdo&bipParams=' + encodeURIComponent(bipParams) + '&_linkToReport=true';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Order Acknowledgement';
      link.className = 'custom-additional-order-link oj-link';

      link.style.fontSize = '14px';
      link.style.color = '#0572ce';
      link.style.textDecoration = 'none';
      link.style.verticalAlign = 'middle';
      link.style.cursor = 'pointer';

      link.addEventListener('mouseenter', () => {
        link.style.textDecoration = 'underline';
      });
      link.addEventListener('mouseleave', () => {
        link.style.textDecoration = 'none';
      });

      additionalOrderDetailsLink.insertAdjacentElement('afterend', separator);
      separator.insertAdjacentElement('afterend', link);
    }

    _extractOrderNumberFromTitle() {
      const titleEl = document.getElementById('oj_ssce1_h_pageTitle');
      if (!titleEl) {
        return null;
      }
      const titleText = titleEl.textContent.trim();
      const match = titleText.match(/Order\s+(\d+)/i);
      return match ? match[1] : null;
    }

    _findAdditionalOrderDetailsLink() {
      const allLinks = document.querySelectorAll('a.oj-link');
      for (let i = 0; i < allLinks.length; i++) {
        if (
          allLinks[i].textContent.trim() === 'Additional order details'
        ) {
          return allLinks[i];
        }
      }
      return null;
    }
  }

  return PageModule;
});
// AI Generated Code by Deloitte + Cursor (END)
