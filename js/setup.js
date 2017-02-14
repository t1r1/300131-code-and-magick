'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');
var buttonSubmit = document.querySelector('.setup-submit');

var buttonSubmitClosed = function (evt) {
  evt.preventDefault();
  if (!setup.classList.contains('invisible')) {
    if (evt.keyCode === 13) {
      setup.classList.add('invisible');
    }
  }
  buttonSubmit.setAttribute('aria-pressed', 'true');
};

var Dialog = {
  open: function () {
    setup.classList.remove('invisible');
  },
  close: function () {
    setup.classList.add('invisible');
    if (typeof this.callback === 'function') {
      this.callback();
    }
  },
  callback: null
};


setupOpen.addEventListener('click', function () {
  Dialog.open();
});
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    Dialog.callback = function () {
      setupOpen.focus();
    };
    Dialog.open();
  }
});

setupClose.addEventListener('click', function () {
  Dialog.close();
});
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    Dialog.close();
  }
});


var setupKeydownClose = function (evt) {
  if (!setup.classList.contains('invisible')) { // если окно открыто
    if (evt.keyCode === 27) {
      setup.classList.add('invisible');
    }
  }
};

document.addEventListener('keydown', setupKeydownClose);

buttonSubmit.addEventListener('keydown', buttonSubmitClosed);

var nameInput = document.querySelector('.setup-user-name');
nameInput.required = true;
nameInput.maxLength = 50;
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardCoatColors = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var wizardEyesColors = ['black',
  'red',
  'blue',
  'yellow',
  'green'];
var fireballColors = ['#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];


window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
window.colorizeElement(wizardFireball, fireballColors, 'backgroundColor');
