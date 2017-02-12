'use strict';

window.utils = (function () {
  return {
    getRandomElement: function (array) {
      var getRandomElementIndex = Math.floor(Math.random() * array.length);
      return array[getRandomElementIndex];
    },
    getRandomElementExcept: function (array, element) {
      var result;
      do {
        result = window.utils.getRandomElement(array);
      } while (result === element);
      return result;
    }
  };
})();
