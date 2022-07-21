import './style.css';

import { displayData, postData } from './postdata.js';

displayData();

const formWrapper = document.querySelector('.form-wrapper');
const form = document.createElement('form');
form.classList.add('submit-form');
form.setAttribute('id', 'form');
form.innerHTML = `
<div class='form-class'>
<h4 class='add-score-label'>Add your score</h4>
<input name='name' class="display-name" type="text" pattern="[a-zA-Z'-']*" title="Name should be composed of alphabeth" placeholder="Enter your Name"><br>
<input name='score' class="display-score" type="text" pattern="[0-9]*" title="Enter a number" placeholder="What is your score"><br>
<button class='submit-button'>Submit</button>
</div>
`;
formWrapper.appendChild(form);

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  displayData();
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const score = e.target.elements.score.value;
  postData(name, score);
  form.reset();
});