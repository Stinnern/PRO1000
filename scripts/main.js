const yearElement = document.querySelector('[data-year]');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const introToggle = document.querySelector('.intro-toggle');
const introExtra = document.querySelector('#intro-extra');

if (introToggle && introExtra) {
  introToggle.addEventListener('click', () => {
    const isExpanded = introToggle.getAttribute('aria-expanded') === 'true';

    introToggle.setAttribute('aria-expanded', String(!isExpanded));
    introExtra.hidden = isExpanded;
    introToggle.querySelector('span').textContent = isExpanded ? 'Les mer' : 'Vis mindre';
  });
}
