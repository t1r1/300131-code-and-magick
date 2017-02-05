'use strict';

window.colorizeElement = function (element, colors, property) {
  var ENTER_KEY_CODE = 13;
  var currentColor = element.style[property];
  var getNewColor = function (evt) {
    if (evt.type === 'keydown' && evt.keyCode !== ENTER_KEY_CODE) {
      return;
    }
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = newColor;
  };
  element.addEventListener('click', getNewColor);
  element.addEventListener('keydown', getNewColor);
};
