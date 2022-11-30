'use strict';
let htmlRandomButton;
// #region ***  DOM references                           ***********

// #endregion

// #region ***  Callback-no-Visualisation - callback___         ***********

const printRandom = function (jsonObject) {
  let champ = Object.keys(jsonObject.data)[0];
  console.log(jsonObject.data[champ]);
  let image = jsonObject.data[champ].image.full;
  console.log(image);
  image = `https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${image}`;
  console.log(image);
  //console.log(Object.keys(jsonObject.data)[0]);
};

const printAllChamp = function (jsonObject) {
  console.log(jsonObject);
  let champ = Object.keys(jsonObject.data);
  console.log(champ);
  for (let i = 0; i < champ.length; i++) {
    let image = jsonObject.data[champ[i]].image.full;
    console.log(image);
    image = `https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${image}`;
    console.log(image);
    let overview = document.querySelector('.c-overview');
    overview.innerHTML += `<div class="c-overview__items">
        <img class="c-champion_img" src="${image}" alt="${champ[i]}" />
      </div>`;
    //console.log(Object.keys(jsonObject.data)[0]);
  }
  Popup();
};
// #endregion

// #region ***  Callback Visualisation - show___ ***********
const showbar = function () {
  let progressBar = document.querySelector('.circular-progress');
  let valueContainer = document.querySelector('.value-container');

  let progressValue = 0;
  let progressEndValue = 80;
  let speed = 50;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};

const showbar1 = function () {
  let progressBar = document.querySelector('.circular-progress1');
  let valueContainer = document.querySelector('.value-container1');

  let progressValue = 0;
  let progressEndValue = 80;
  let speed = 50;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};
const showbar2 = function () {
  let progressBar = document.querySelector('.circular-progress2');
  let valueContainer = document.querySelector('.value-container2');

  let progressValue = 0;
  let progressEndValue = 80;
  let speed = 50;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};
const showbar3 = function () {
  let progressBar = document.querySelector('.circular-progress3');
  let valueContainer = document.querySelector('.value-container3');

  let progressValue = 0;
  let progressEndValue = 80;
  let speed = 50;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};
const Popup = function () {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  let buttons = document.querySelectorAll('.c-champion_img');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  const clicked = function () {
    console.log('clicked' + ' ' + this.alt);
    modal.style.display = 'block';
  };
  for (const btn of buttons) {
    console.log(btn.getAttribute('alt'));
    btn.addEventListener('click', clicked);
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
};
// #endregion
// #region ***  Event Listeners - listenTo___         ***********
const listenToRandom = function () {
  htmlRandomButton.addEventListener('click', function () {
    console.log('gedrukt');
    getRandom();
  });
};
// #endregion
// #region ***  Data Access - get___                     ***********
const getRandom = function () {
  handleData(`https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/Aatrox.json`, printRandom);
};

const getAllChamp = function (typeid) {
  handleData(`https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json`, printAllChamp);
};
// #endregion
const init = function () {
  console.log('DOM geladen');
  htmlRandomButton = document.querySelector('.js-random-button');
  //listenToRandom();
  //de show bars moeten naar de plaats gaan waar je klik event is en daar uitgevoerd worden.
  showbar();
  showbar1();
  showbar2();
  showbar3();
  getAllChamp();
  //Popup();
};

document.addEventListener('DOMContentLoaded', init);
// #endregion
