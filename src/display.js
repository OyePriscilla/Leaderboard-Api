const dynamicWrapper = document.querySelector('.dynamic-wrapper');
const displayLearderbord = () => {
  const displayName = document.querySelector('.display-name').value;
  const displayScore = document.querySelector('.display-score').value;
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = `
      <div class="display-dynamic-container">
      <div class="dynamic">
          <p>${displayName}: ${displayScore}</p>

      </div>
  </div>
      `;
  dynamicWrapper.appendChild(container);
};

export default displayLearderbord;