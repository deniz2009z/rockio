(function () {
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

  const calloutItems = document.querySelectorAll('.product-callout-item');
  const calloutImage = document.querySelector('.product-callouts-image');
  if (calloutItems.length && calloutImage) {
    let active = 0;
    const setActive = (index) => {
      calloutItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
      calloutImage.dataset.active = calloutItems[index].dataset.callout;
    };
    setActive(0);
    setInterval(() => {
      active = (active + 1) % calloutItems.length;
      setActive(active);
    }, 3200);
    calloutItems.forEach((item, i) => {
      item.addEventListener('mouseenter', () => setActive(i));
    });
  }

  const leadForm = document.querySelector('.lead-form');
  if (leadForm) {
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
  }
})();
