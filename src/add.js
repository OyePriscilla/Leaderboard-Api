import displayLearderbord from './display.js';

const addList = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const displayName = document.querySelector('.display-name').value;
    const displayScore = document.querySelector('.display-score').value;
    if (displayName !== '' && displayScore !== '') {
      displayLearderbord();
      form.reset();
    }
  });
};

export default addList;
