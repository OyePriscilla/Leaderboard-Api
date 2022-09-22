import './style.css';

import displayData from './modules/displayData.js';
import { postData } from './modules/apiData.js';
import refresh from './modules/refresh.js';

const formWrapper = document.querySelector('.form-wrapper');
const form = document.createElement('form');
const error = document.querySelector('.hint');
const warn = document.querySelector('.warn');

form.classList.add('submit-form');
form.setAttribute('id', 'form');
form.innerHTML = `
<div class='form-class'>
<h4 class='add-score-label'>Add your score</h4>
<input name="name" class="display-name" type="text" maxlength="50" placeholder="Enter your Name"><br>
<input name="score" class="display-score" type="text" maxlength="6" placeholder="What is your score"><br>
<button class="submit-button">Submit</button>
</div>
`;
formWrapper.appendChild(form);

let validScore;
let validName;

const errorMessage = (message) => {
  message.style.display = 'block';
  setTimeout(() => {
    message.style.display = 'none';
  }, 4000);
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const score = e.target.elements.score.value;
  const nameRegex = /^[A-Za-z ]*$/;
  const scoreRegex = /^[0-9]*$/;
  validScore = scoreRegex.test(score);
  validName = nameRegex.test(name);
  if (name !== '' && score !== '') {
    if (validName && validScore) {
      postData(name, score);
      form.reset();
    } else {
      errorMessage(error);
    }
  } else {
    errorMessage(warn);
  }
});

displayData();
refresh();
