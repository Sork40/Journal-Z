let current = 0;
const pages = document.querySelectorAll('.page');

function updatePages() {
  pages.forEach((page, i) => {
    page.style.zIndex = pages.length - i;
    page.style.transform = i <= current ? 'rotateY(-180deg)' : 'rotateY(0deg)';
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' && current < pages.length - 1) {
    current++;
    updatePages();
  } else if (e.key === 'ArrowLeft' && current > 0) {
    current--;
    updatePages();
  }
});
