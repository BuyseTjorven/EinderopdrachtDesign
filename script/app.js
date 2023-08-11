'use strict';
let htmlRandomButton;
let id;
// #region ***  DOM references                           ***********

// #endregion

// #region ***  Callback-no-Visualisation - callback___         ***********

const ShowDetail = function (jsonObject) {
  const dogs = [];
  for (let dog of jsonObject) {
    dogs[dog.id] = dog;
  }
  let weight = dogs[id].weight.metric;
  weight = weight.split(' - ');
  if (weight[0] == undefined || weight[0] == null || weight[0] == '') {
    weight[0] = 0;
  }
  if (weight[1] == undefined || weight[1] == null || weight[1] == '') {
    weight[1] = 0;
  }
  let heigt = dogs[id].height.metric;
  heigt = heigt.split(' - ');
  if (heigt[0] == undefined || heigt[0] == null || heigt[0] == '') {
    heigt[0] = 0;
  }
  if (heigt[1] == undefined || heigt[1] == null || heigt[1] == '') {
    heigt[1] = 0;
  }
  showbar(weight[0], weight[1]);
  showbar1(heigt[0], heigt[1]);
  //console.log(image);
  document.getElementById('title_popup').innerHTML = dogs[id].name;
  document.getElementById('bredfor_popup').innerHTML = 'Bred for';
  document.getElementById('bredforcontent_popup').innerHTML = dogs[id].bred_for;
  document.getElementById('temprament_popup').innerHTML = 'Temperament';
  document.getElementById('tempramentcontent_popup').innerHTML = dogs[id].temperament;
  const image = document.getElementById('img_popup');

  image.src = `${dogs[id].image.url}`;
  console.log(dogs[id].name);
  //Dials();
};
const Dials = function () {
  //de show bars moeten naar de plaats gaan waar je klik event is en daar uitgevoerd worden.
  //in showbar moet je de progressEndValue meegeven..
  showbar();
  showbar1();
};
const printAllDog = function (jsonObject) {
  console.log(jsonObject);
  for (let dog of jsonObject) {
    //console.log(dog);
    let image = `${dog.image.url}`;
    //console.log(image);
    let overview = document.querySelector('.c-overview');
    overview.innerHTML += `<div class="c-overview__items">
        <img class="c-champion_img" tabindex="0" src="${image}" alt="${dog.id}" />
      </div>`;
  }
  Popup();
};
// #endregion

// #region ***  Callback Visualisation - show___ ***********
const showbar = function (startValue, progressEndValue) {
  //the damage bar
  let progressBar = document.querySelector('.circular-progress');
  let valueContainer = document.querySelector('.value-container');

  let progressValue = startValue;
  progressEndValue = progressEndValue;
  //let progressEndValue = 80;
  let speed = 20;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${startValue} - ${progressValue} KG`;
    progressBar.style.background = `conic-gradient(
      #cadcff ${startValue * 3.6}deg,
      #fa0202 ${startValue * 3.6}deg ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg ${progressEndValue * 3.6}deg
  )`;
    if (progressValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};

const showbar1 = function (startValue, progressEndValue) {
  //the armor bar
  let progressBar = document.querySelector('.circular-progress1');
  let valueContainer = document.querySelector('.value-container1');

  let progressValue = startValue;
  //let progressEndValue = 80;
  let speed = 20;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${startValue} - ${progressValue} cm`;
    progressBar.style.background = `conic-gradient(
      #cadcff ${startValue * 3.6}deg,
      #eefa02 ${startValue * 3.6}deg ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg ${progressEndValue * 3.6}deg
  )`;
    if (progressValue >= progressEndValue) {
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
    id = this.getAttribute('alt');
    getAllDoginfo();
    console.log(id);
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
const getAllDog = function (typeid) {
  handleData(`https://api.TheDogAPI.com/v1/breeds`, printAllDog);
};
const getAllDoginfo = function (typeid) {
  handleData(`https://api.TheDogAPI.com/v1/breeds`, ShowDetail);
};
// #endregion
const init = function () {
  console.log('DOM geladen');
  htmlRandomButton = document.querySelector('.js-random-button');
  //getAllChamp();
  getAllDog();
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
