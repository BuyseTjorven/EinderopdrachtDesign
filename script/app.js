'use strict';

// #region ***  DOM references                           ***********

// #endregion

// #region ***  Callback-Visualisation - show___         ***********

const showElementen = function (jsonObject) {
  console.log(jsonObject);
};
// #endregion

// #region ***  Callback-No Visualisation - callback___  ***********
// #endregion

// #region ***  Data Access - get___                     ***********
const getElementen = function () {
  handleData(`http://127.0.0.1:5000/api/v1/elementen/`, showElementen);
};

const getElementenByFilter = function (typeid) {
  handleData(`http://127.0.0.1:5000/api/v1/elementen/types/${typeid}/`, showElementen);
};
// #endregion
const init = function () {
  // laad basis data op pagina (een random unit nemen en met showelementen printen)
  // dan gewoon een knop met klik random maken en als die geklikt wordt show elementen doen met die unit die opgehaald wordt)
};

document.addEventListener('DOMContentLoaded', init);
// #endregion
