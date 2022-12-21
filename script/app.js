'use strict';
let htmlRandomButton;
// #region ***  DOM references                           ***********

// #endregion

// #region ***  Callback-no-Visualisation - callback___         ***********

const ShowDetail = function (jsonObject) {
  let champ = Object.keys(jsonObject.data)[0];
  console.log(jsonObject.data[champ]);
  let image = jsonObject.data[champ].image.full;
  let info = jsonObject.data[champ];
  let damage = jsonObject.data[champ].info.attack;
  let armor = jsonObject.data[champ].info.defense;
  let magic = jsonObject.data[champ].info.magic;
  let difficulty = jsonObject.data[champ].info.difficulty;
  console.log(damage);
  console.log(armor);
  console.log(magic);
  console.log(difficulty);
  showbar(damage * 10);
  showbar1(armor * 10);
  showbar2(difficulty * 10);
  showbar3(magic * 10);
  //console.log(image);
  document.getElementById('title_popup').innerHTML = 'Info about ' + info.id;
  document.getElementById('lore_popup').innerHTML = info.lore;
  //Dials();
};
const Dials = function () {
  //de show bars moeten naar de plaats gaan waar je klik event is en daar uitgevoerd worden.
  //in showbar moet je de progressEndValue meegeven..
  showbar();
  showbar1();
  showbar2();
  showbar3();
};
const printAllChamp = function (jsonObject) {
  console.log(jsonObject);
  let champ = Object.keys(jsonObject.data);
  console.log(champ);
  for (let i = 0; i < champ.length; i++) {
    let image = jsonObject.data[champ[i]].image.full;
    //console.log(image);
    image = `https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${image}`;
    //console.log(image);
    let overview = document.querySelector('.c-overview');
    overview.innerHTML += `<div class="c-overview__items">
        <img class="c-champion_img" tabindex="0" src="${image}" alt="${champ[i]}" />
      </div>`;
    //console.log(Object.keys(jsonObject.data)[0]);
  }
  Popup();
};
// #endregion

// #region ***  Callback Visualisation - show___ ***********
const showbar = function (progressEndValue) {
  //the damage bar
  let progressBar = document.querySelector('.circular-progress');
  let valueContainer = document.querySelector('.value-container');

  let progressValue = 0;
  //let progressEndValue = 80;
  let speed = 20;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #fa0202 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};

const showbar1 = function (progressEndValue) {
  //the armor bar
  let progressBar = document.querySelector('.circular-progress1');
  let valueContainer = document.querySelector('.value-container1');

  let progressValue = 0;
  //let progressEndValue = 80;
  let speed = 20;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #eefa02 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};
const showbar2 = function (progressEndValue) {
  //the healt bar
  let progressBar = document.querySelector('.circular-progress2');
  let valueContainer = document.querySelector('.value-container2');

  let progressValue = 0;
  //let progressEndValue = 80;
  let speed = 20;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #02fa1b ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};
const showbar3 = function (progressEndValue) {
  //the speed bar
  let progressBar = document.querySelector('.circular-progress3');
  let valueContainer = document.querySelector('.value-container3');

  let progressValue = 0;
  //let progressEndValue = 80;
  let speed = 20;

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
    getRandom(this.alt);
    var modal_content = document.querySelector('.modal-content');
    modal_content.classList.add('modal-content-show');
    modal.style.display = 'block';
  };

  for (const btn of buttons) {
    //console.log(btn.getAttribute('alt'));
    btn.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        btn.click();
      }
    });
    btn.addEventListener('click', clicked);
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
    var modal_content = document.querySelector('.modal-content');
    modal_content.classList.remove('modal-content-show');
  };
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      span.click();
    }
  });
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      var modal_content = document.querySelector('.modal-content');
      modal_content.classList.remove('modal-content-show');
    }
  };
};

// #endregion
// #region ***  Event Listeners - listenTo___         ***********
// const listenToRandom = function () {
//   htmlRandomButton.addEventListener('click', function () {
//     console.log('gedrukt');
//     getRandom();
//   });
// };
// #endregion
// #region ***  Data Access - get___                     ***********
const getRandom = function (champ) {
  handleData(`https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${champ}.json`, ShowDetail);
};

const getAllChamp = function (typeid) {
  handleData(`https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json`, printAllChamp);
};
// #endregion
const init = function () {
  console.log('DOM geladen');
  htmlRandomButton = document.querySelector('.js-random-button');
  getAllChamp();
};

document.addEventListener('DOMContentLoaded', init);
// #endregion

//ideeen
// grid van popup  4 rijen maken ipv 2 met indeling bvb 10% 40% 10% 40% en dan de woorden armor enzo in de 10% en de cirkels in de 40%
// aan bovenstaande woorden icoontjes toevoegen vo armor enzo te verduidelijken
// algemene media queries toevoegen
// de popup nog wat mooier maken
// de popup nog responsive maken
// de popup nog een beetje meer data geven

//extra uitleg bij damge enzo als op desktop grote is
