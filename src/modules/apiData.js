import baseUrl from './apiUrl.js';

const getData = async () => {
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data.result;
};

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

export { getData, postData };
