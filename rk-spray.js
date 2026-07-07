(function () {
  const calloutItems = document.querySelectorAll('.product-callout-item');
  const calloutImage = document.querySelector('.product-callouts-image');
  if (!calloutItems.length || !calloutImage) return;

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
})();
