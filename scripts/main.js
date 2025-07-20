
let current = 0;
const pages = document.querySelectorAll('.page');

function updatePages() {
  pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;
    page.style.transform = index < current ? 'rotateY(-180deg)' : 'rotateY(0deg)';
    page.style.opacity = index === current ? '1' : '0';
  });
}

document.getElementById('next').addEventListener('click', () => {
  if (current < pages.length - 1) {
    current++;
    updatePages();
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (current > 0) {
    current--;
    updatePages();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    document.getElementById('next').click();
  } else if (e.key === 'ArrowLeft') {
    document.getElementById('prev').click();
  }
});

window.onload = updatePages;
