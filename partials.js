const FOOTER_HTML = `
  <div class="footer-main">
    <div class="footer-brand">
      <a href="index.html" class="footer-logo-link" aria-label="Rockio">
        <img src="images/logo-header.png" alt="" class="footer-logo-img" width="187" height="48">
      </a>
      <p class="footer-tagline">Robots for agriculture. Currently in active development — partnering with early adopters and investors.</p>
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
      <li>FAA Part 107</li>
      <li>CCPA Ready</li>
      <li>SOC 2 Type II</li>
      <li>ISO 27001</li>
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

const FIELD_ANIM_HTML = `
  <div class="field-anim-legend" aria-hidden="true">
    <span><i class="leg-crop" aria-hidden="true"></i> Your crop — left alone</span>
    <span><i class="leg-weed" aria-hidden="true"></i> Weed — gets spray</span>
    <span><i class="leg-spray" aria-hidden="true"></i> Spray — only on weeds</span>
  </div>
  <div class="field-anim-ground">
    <div class="field-anim-row-single" aria-hidden="true"></div>
    <span class="field-anim-target field-anim-plant" style="left:10%"></span>
    <span class="field-anim-target field-anim-plant" style="left:18%"></span>
    <span class="field-anim-target field-anim-weed field-anim-weed-1" style="left:28%"></span>
    <span class="field-anim-target field-anim-plant" style="left:38%"></span>
    <span class="field-anim-target field-anim-plant" style="left:46%"></span>
    <span class="field-anim-target field-anim-weed field-anim-weed-2" style="left:52%"></span>
    <span class="field-anim-target field-anim-plant" style="left:62%"></span>
    <span class="field-anim-target field-anim-plant" style="left:70%"></span>
    <span class="field-anim-target field-anim-weed field-anim-weed-3" style="left:76%"></span>
    <span class="field-anim-target field-anim-plant" style="left:86%"></span>
    <span class="field-anim-target field-anim-plant" style="left:94%"></span>
    <span class="field-anim-spray-burst field-anim-spray-burst-1" aria-hidden="true"></span>
    <span class="field-anim-spray-burst field-anim-spray-burst-2" aria-hidden="true"></span>
    <span class="field-anim-spray-burst field-anim-spray-burst-3" aria-hidden="true"></span>
    <div class="field-anim-machine" aria-hidden="true">
      <div class="field-anim-machine-wheel"></div>
      <div class="field-anim-machine-wheel"></div>
      <div class="field-anim-machine-body"></div>
      <div class="field-anim-machine-tank"></div>
      <div class="field-anim-machine-boom"></div>
      <div class="field-anim-scan-beam"></div>
    </div>
  </div>
  <div class="field-anim-step" aria-live="polite">
    <p class="field-anim-step-1">Step 1 — The machine drives down your row.</p>
    <p class="field-anim-step-2">Step 2 — It looks at each plant and picks out the weeds.</p>
    <p class="field-anim-step-3">Step 3 — It sprays only the weeds. Your crop stays dry.</p>
    <p class="field-anim-step-4">Done — three weeds treated. Zero crop sprayed.</p>
  </div>
`;

function mountFieldAnims() {
  document.querySelectorAll('[data-field-anim]').forEach((el) => {
    if (el.dataset.mounted === 'true') return;
    el.innerHTML = FIELD_ANIM_HTML;
    el.dataset.mounted = 'true';
  });
}

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

document.addEventListener('DOMContentLoaded', () => {
  mountCookiePanel();
  bindCookieTriggers();
  mountFieldAnims();
  mountFooter();
  setActiveNav();
});
