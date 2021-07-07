// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const array = [];

function randomArray(length) {
  for (let key = 0; key < length; key += 1) {
    array.push(Math.floor(Math.random() * 50));
  }
}

function randomNumber() {
  return array.reduce((accumulator, actual) => accumulator + actual);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  return new Promise((resolve, reject) => {
    fetch(API_URL, myObject)
      .then((response) => response.json())
      .then((data) => {
        if (randomNumber() < 8000) resolve(data.joke); 
        else console.log('É mais de oito mil! Essa promise deve estar quebrada!');
      })
      .catch((error) => reject(error));
  });
};

function changeElement() {
  const label = document.getElementById('jokeContainer');
  fetchJoke()
    .then((joke) => {
      label.innerText = joke;
    })
    .catch((error) => alert(error));
}

window.onload = () => {
  randomArray(10);
  changeElement();
};