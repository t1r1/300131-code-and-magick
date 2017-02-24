'use strict';

window.colorizeElement = (function () {
  return function (element, colors, property, onColorChange) {
    var ENTER_KEY_CODE = 13;
    var currentColor = element.style[property];
    var getNewColor = function (evt) {
      if (evt.type === 'keydown' && evt.keyCode !== ENTER_KEY_CODE) {
        return;
      }
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      element.style[property] = newColor;
      if (typeof onColorChange === 'function') {
        setTimeout(onColorChange, 5000);
      }
    };
    element.addEventListener('click', getNewColor);
    element.addEventListener('keydown', getNewColor);
  };
})();

