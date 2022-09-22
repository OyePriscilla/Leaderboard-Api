import displayData from './displayData.js';

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  displayData();
});

export default refresh;