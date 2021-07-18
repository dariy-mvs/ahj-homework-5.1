import addEvent from '../app';

test('should render self', () => {
  document.body.innerHTML = '<div class="popover-btn" data-title="popover title" data-text="popover text">click me</div>';
  const popoverBtn = document.querySelector('.popover-btn');
  addEvent();
  popoverBtn.click();
  const popover = document.querySelector('.popover');
  expect(popover.innerHTML).toEqual(`<span class="popover-title">${popoverBtn.dataset.title}</span><span class="popover-text">${popoverBtn.dataset.text}</span>`);
});
