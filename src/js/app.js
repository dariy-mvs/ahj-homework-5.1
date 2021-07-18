export default function addEvent() {
  const popoverButton = document.querySelector('.popover-btn');
  if (popoverButton) {
    popoverButton.addEventListener('click', (event) => {
      const { target } = event;
      const popover = document.createElement('div');
      if (!document.querySelector('.popover')) {
        popover.classList.add('popover');
        popover.innerHTML = `<span class="popover-title">${target.dataset.title}</span><span class="popover-text">${target.dataset.text}</span>`;
        const targetCoords = target.getBoundingClientRect();
        target.before(popover);
        const popoverCoords = popover.getBoundingClientRect();
        popover.style = `top: ${targetCoords.top - popoverCoords.height - 7}px; left: ${targetCoords.left + (targetCoords.width / 2) - (popoverCoords.width / 2)}px;`;
      } else {
        document.querySelector('.popover').remove();
      }
    });
  }
}
addEvent();
