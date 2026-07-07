const revealSelector = [
  '.statement',
  '.doctrine-inner',
  '.capability-list li',
  '.arch-layer',
  '.domain-card',
  '.program-item',
  '.deployment-intro',
  '.deployment-steps li',
  '.security-item',
  '.metric',
  '.quotes blockquote',
  '.clients',
  '.company-grid > div',
  '.company-facts',
  '.careers-content',
  '.roles-list li',
  '.brief-list li',
  '.contact-grid > div',
  '.contact-form',
  '.home-link-card',
  '.home-flagship-inner > div',
  '.home-operating-item',
  '.home-trust-item',
  '.architecture-header',
  '.page-cta-inner',
  '.product-cta-inner',
  '.product-visual-card',
  '.product-callout-item',
  '.spec-group',
  '.product-what-item',
  '.impact-card',
  '.pipeline-step',
  '.compare-row',
  '.stack-item',
  '.product-lead-grid > div',
  '.lead-form',
  '.product-economics-inner > div',
  '.role-link',
  '.faq-item',
].join(', ');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
);

document.querySelectorAll(revealSelector).forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Received';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      e.target.reset();
    }, 2400);
  });
}

document.querySelectorAll('.lead-form').forEach((leadForm) => {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = leadForm.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Received';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      leadForm.reset();
    }, 2400);
  });
});

const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const duration = 1400;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          el.textContent = prefix + value.toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => countObserver.observe(el));
}

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
let lastScroll = 0;

function closeMenu() {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      menuToggle.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

window.addEventListener('scroll', () => {
  if (!header) return;
  const current = window.scrollY;
  if (document.body.classList.contains('menu-open')) return;
  if (current > lastScroll && current > 80) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScroll = current;
}, { passive: true });

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});

const heroVideo = document.querySelector('.hero-video-player');
const heroVideoWrap = document.querySelector('.hero-video');

if (heroVideo && heroVideoWrap) {
  const source = heroVideo.querySelector('source');
  const hasSrc = heroVideo.getAttribute('src') || (source && source.getAttribute('src'));

  if (hasSrc) {
    heroVideoWrap.classList.add('has-video');
    heroVideo.load();
    heroVideo.play().catch(() => {});
  }

  heroVideo.addEventListener('loadeddata', () => {
    heroVideoWrap.classList.add('has-video');
  });
}

const productHero = document.querySelector('.product-hero');
const darkHeader = document.querySelector('.site-header-dark');

if (productHero && darkHeader) {
  const toggleHeader = () => {
    const heroBottom = productHero.offsetTop + productHero.offsetHeight - 80;
    if (window.scrollY > heroBottom) {
      darkHeader.classList.add('site-header-scrolled');
    } else {
      darkHeader.classList.remove('site-header-scrolled');
    }
  };

  window.addEventListener('scroll', toggleHeader, { passive: true });
  toggleHeader();
}

