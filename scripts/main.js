JavaScript
const pages = document.querySelectorAll('.page');
let current = 0;

const showPage = (index) => {
  pages.forEach((p, i) => {
    p.classList.remove('visible');
    if (i === index) {
      p.classList.add('visible');
      bindInputs(p);
    }
  });
};

document.getElementById('next').addEventListener('click', () => {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (current > 0) {
    current--;
    showPage(current);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') document.getElementById('next').click();
  if (e.key === 'ArrowLeft') document.getElementById('prev').click();
});

function bindInputs(page) {
  document.querySelectorAll('.input-overlay').forEach(e => e.remove());

  const inputData = page.dataset.inputs ? JSON.parse(page.dataset.inputs) : [];

  inputData.forEach(input => {
    const inputElem = document.createElement('input');
    inputElem.className = 'input-overlay';
    inputElem.style.left = `${input.x}px`;
    inputElem.style.top = `${input.y}px`;
    inputElem.value = localStorage.getItem(input.id) || '';
    inputElem.setAttribute('data-id', input.id);

    inputElem.addEventListener('input', () => {
      localStorage.setItem(input.id, inputElem.value);
    });

    document.body.appendChild(inputElem);
  });
}

showPage(current);
