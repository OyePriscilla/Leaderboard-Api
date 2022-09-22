import { getData } from './apiData.js';

const displayDetails = document.querySelector('.dynamic-wrapper');
const format = (num) => num
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const displayData = async () => {
  const userData = await getData();
  userData.sort((a, b) => b.score - a.score);
  displayDetails.innerHTML = '';
  userData.forEach((player) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML += `
           <p>${player.user}: ${format(player.score)}</p>
          `;
    displayDetails.append(item);
  });
};

export default displayData;