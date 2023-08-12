'use strict';
let htmlRandomButton;
let id;


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

  document.getElementById('title_popup').innerHTML = dogs[id].name;
  document.getElementById('bredfor_popup').innerHTML = 'Bred for';
  document.getElementById('bredforcontent_popup').innerHTML = dogs[id].bred_for;
  document.getElementById('temprament_popup').innerHTML = 'Temperament';
  document.getElementById('tempramentcontent_popup').innerHTML = dogs[id].temperament;
  const image = document.getElementById('img_popup');

  image.src = `${dogs[id].image.url}`;
  console.log(dogs[id].name);
};
const Dials = function () {
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
        <img class="c-dog_img" tabindex="0" src="${image}" alt="${dog.id}" />
        <div class="c-dog_title_container">
          <h3 class="c-dog_title">${dog.name}</h3>
        </div>
      </div>`;
  }
  Popup();
};

const showbar = function (startValue, progressEndValue) {
  let progressBar = document.querySelector('.circular-progress');
  let valueContainer = document.querySelector('.value-container');
  let progressValue = startValue;
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
  let progressBar = document.querySelector('.circular-progress1');
  let valueContainer = document.querySelector('.value-container1');
  let progressValue = startValue;
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
  let buttons = document.querySelectorAll('.c-dog_img');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  const clicked = function () {
    id = this.getAttribute('alt');
    getAllDogsInfo();
    console.log(id);
    var modal_content = document.querySelector('.modal-content');
    modal_content.classList.add('modal-content-show');
    modal.style.display = 'block';
  };

  for (const btn of buttons) {
    btn.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        btn.click();
      }
    });
    btn.addEventListener('click', clicked);
  }

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



/*** GET ***/
const getAllDogs = function (typeid) {
  handleData(`https://api.TheDogAPI.com/v1/breeds`, printAllDog);
};

const getAllDogsInfo = function (typeid) {
  handleData(`https://api.TheDogAPI.com/v1/breeds`, ShowDetail);
};



// DomContentLoaded
const init = function () {
  console.log('DOM geladen');
  htmlRandomButton = document.querySelector('.js-random-button');
  getAllDogs();
};

document.addEventListener('DOMContentLoaded', init);