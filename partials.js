const FOOTER_HTML = `
  <div class="footer-main">
    <div class="footer-brand">
      <a href="index.html" class="footer-logo-link" aria-label="Rockio">
        <img src="images/logo-header.png" alt="" class="footer-logo-img" width="187" height="48">
      </a>
      <p class="footer-tagline">Edge intelligence for precision agriculture. RK-SPRAY intelligence bar in active development — partnering with early access growers.</p>
      <address class="footer-address">
        Rockio Inc.<br>
        548 Market Street, Suite 35410<br>
        San Francisco, CA 94104<br>
        United States
      </address>
      <div class="footer-contact-lines">
        <a href="mailto:hello@rockio.com">hello@rockio.com</a>
        <a href="mailto:support@rockio.com">support@rockio.com</a>
        <a href="tel:+14155550142">+1 (415) 555-0142</a>
      </div>
      <div class="footer-social">
        <a href="https://linkedin.com/company/rockio" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
        <a href="https://youtube.com/@rockio" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
      </div>
      <form class="footer-newsletter" action="#" method="post">
        <label class="footer-newsletter-label" for="footer-email">Newsletter</label>
        <p class="footer-newsletter-hint">Product updates and field deployment news. No spam.</p>
        <div class="footer-newsletter-row">
          <input type="email" id="footer-email" name="email" placeholder="your@email.com" required autocomplete="email">
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
    <div class="footer-col">
      <p class="footer-col-title">Company</p>
      <a href="about.html">About us</a>
      <a href="about.html#vision">Vision</a>
      <a href="about.html#team">Team</a>
      <a href="careers.html">Careers</a>
    </div>
    <div class="footer-col">
      <p class="footer-col-title">Resources</p>
      <a href="press.html">Press</a>
      <a href="press.html#media-kit">Media kit</a>
      <a href="press.html#case-studies">Case studies</a>
      <a href="products.html">Products</a>
    </div>
    <div class="footer-col">
      <p class="footer-col-title">Support</p>
      <a href="faq.html">FAQ</a>
      <a href="contact.html">Contact</a>
      <a href="mailto:support@rockio.com">Technical support</a>
    </div>
    <div class="footer-col">
      <p class="footer-col-title">Legal</p>
      <a href="legal.html">Legal notice</a>
      <a href="privacy.html">Privacy policy</a>
      <a href="terms.html">Terms of service</a>
      <button type="button" class="footer-link-btn cookie-settings-trigger">Cookie settings</button>
    </div>
  </div>
  <div class="footer-trust">
    <p class="footer-trust-label">Compliance</p>
    <ul class="footer-trust-list">
      <li>EPA spray logging</li>
      <li>CCPA Ready</li>
      <li>Edge compute</li>
      <li>Safety MCU</li>
    </ul>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">&copy; 2026 Rockio Inc. All rights reserved.</p>
    <div class="footer-legal">
      <a href="legal.html">Legal</a>
      <a href="privacy.html">Privacy</a>
      <a href="terms.html">Terms</a>
      <button type="button" class="footer-link-btn cookie-settings-trigger">Cookies</button>
    </div>
  </div>
`;

const COOKIE_PANEL_HTML = `
  <div class="cookie-panel" id="cookie-panel" aria-hidden="true" role="dialog" aria-labelledby="cookie-panel-title">
    <div class="cookie-panel-backdrop" data-cookie-close></div>
    <div class="cookie-panel-sheet">
      <div class="cookie-panel-head">
        <h2 id="cookie-panel-title">Cookie preferences</h2>
        <button type="button" class="cookie-panel-close" aria-label="Close" data-cookie-close>&times;</button>
      </div>
      <p class="cookie-panel-lead">Manage how Rockio uses cookies on this website.</p>
      <div class="cookie-settings">
        <div class="cookie-option">
          <div class="cookie-option-head">
            <h3>Essential cookies</h3>
            <span class="cookie-badge">Always on</span>
          </div>
          <p>Required for basic site functionality, security, and navigation.</p>
        </div>
        <div class="cookie-option">
          <div class="cookie-option-head">
            <h3>Analytics cookies</h3>
            <label class="cookie-toggle">
              <input type="checkbox" checked>
              <span class="cookie-toggle-ui"></span>
            </label>
          </div>
          <p>Help us understand how visitors use our website.</p>
        </div>
        <div class="cookie-option">
          <div class="cookie-option-head">
            <h3>Marketing cookies</h3>
            <label class="cookie-toggle">
              <input type="checkbox">
              <span class="cookie-toggle-ui"></span>
            </label>
          </div>
          <p>Used to deliver relevant content and measure campaign performance.</p>
        </div>
      </div>
      <div class="cookie-panel-actions">
        <button type="button" class="cta cookie-panel-save">Save preferences</button>
        <button type="button" class="cta-secondary" data-cookie-close>Close</button>
      </div>
      <p class="cookie-panel-note">See our <a href="privacy.html">Privacy policy</a> for more information.</p>
    </div>
  </div>
`;

function getPageName() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === '' || path === '/') return 'home';
  return path.replace('.html', '');
}

function setActiveNav() {
  const page = document.body.dataset.page || getPageName();
  document.querySelectorAll('.site-nav-links a, .mobile-menu a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.includes('#')) return;
    const linkPage = href.replace('.html', '').replace('index', 'home');
    if (linkPage === page) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function mountCookiePanel() {
  if (document.getElementById('cookie-panel')) return;
  document.body.insertAdjacentHTML('beforeend', COOKIE_PANEL_HTML);

  const panel = document.getElementById('cookie-panel');
  const openPanel = () => {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('cookie-panel-open');
  };
  const closePanel = () => {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cookie-panel-open');
  };

  document.querySelectorAll('[data-cookie-close]').forEach((el) => {
    el.addEventListener('click', closePanel);
  });

  document.querySelectorAll('.cookie-panel-save').forEach((btn) => {
    btn.addEventListener('click', closePanel);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
  });

  window.openCookieSettings = openPanel;
}

function bindCookieTriggers() {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.cookie-settings-trigger');
    if (!trigger) return;
    e.preventDefault();
    if (window.openCookieSettings) window.openCookieSettings();
  });
}

function mountFooter() {
  const footer = document.querySelector('.site-footer');
  if (!footer || footer.dataset.mounted === 'true') return;
  footer.innerHTML = FOOTER_HTML;
  footer.dataset.mounted = 'true';

  const form = footer.querySelector('.footer-newsletter');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const input = form.querySelector('input');
      const original = btn.textContent;
      btn.textContent = 'Subscribed';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        input.value = '';
      }, 2400);
    });
  }

}

function mountInnerBand() {
  const page = document.body.dataset.page || getPageName();
  if (page === 'home' || page === 'rk-spray' || document.querySelector('.inner-band')) return;

  const items = [
    'RK-SPRAY',
    'Intelligence bar',
    'Edge compute',
    'Field trials',
    'San Francisco',
    'Precision agriculture',
    'PWM valve control',
    'Safety MCU',
  ];
  const trackContent = [...items, ...items].map((t) => `<span>${t}</span>`).join('');
  const band = document.createElement('div');
  band.className = 'inner-band';
  band.setAttribute('aria-hidden', 'true');
  band.innerHTML = `<div class="inner-band-track">${trackContent}</div>`;

  const header = document.querySelector('.site-header');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (header && mobileMenu) {
    mobileMenu.after(band);
  } else if (header) {
    header.after(band);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  mountCookiePanel();
  bindCookieTriggers();
  mountFooter();
  mountInnerBand();
  setActiveNav();
});
