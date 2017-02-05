'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = element.style[property];
  element.addEventListener('click', function () {
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = newColor;
  });
};
