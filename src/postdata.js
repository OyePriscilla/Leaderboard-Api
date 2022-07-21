const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ly6fpMKbwlcnhCJnzmVm/scores/';

const displayDetails = document.querySelector('.dynamic-wrapper');

const format = (num) => num
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const postData = async (name, score) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    mode: 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getData = async () => {
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data.result;
};

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

export { postData, displayData };