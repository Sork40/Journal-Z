const pages = document.querySelectorAll('.page');
let current = 0;

const updateVisibility = (index) => {
  pages.forEach((p, i) => {
    p.classList.remove('visible');
    if (i === index) {
      p.classList.add('visible');
    }
  });
};

document.getElementById('next').addEventListener('click', () => {
  if (current < pages.length - 1) {
    current++;
    updateVisibility(current);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateVisibility(current);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    document.getElementById('next').click();
  } else if (e.key === 'ArrowLeft') {
    document.getElementById('prev').click();
  }
});

// Initialisation
updateVisibility(current);
