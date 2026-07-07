const revealSelector = [  '.statement',
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
  '.page-cta-inner',
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

