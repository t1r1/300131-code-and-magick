'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var buttonSubmit = document.querySelector('.setup-submit');
var setupClickOpen = function () {
  setup.classList.remove('invisible');
};

var setupClickClose = function () {
  setup.classList.add('invisible');
};

var buttonSubmitClosed = function (evt) {
  evt.preventDefault();
  if (!setup.classList.contains('invisible')) {
    if (evt.keyCode === 13) {
      setup.classList.add('invisible');
    }
  }
  buttonSubmit.setAttribute('aria-pressed', 'true');
};

setupOpen.addEventListener('click', setupClickOpen);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('invisible');
  }
});

setupClose.addEventListener('click', setupClickClose);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.add('invisible');
  }
});

document.addEventListener('keydown', function (evt) {
  if (!setup.classList.contains('invisible')) {
    if (evt.keyCode === 27) {
      setup.classList.add('invisible');
    }
  }
});

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
