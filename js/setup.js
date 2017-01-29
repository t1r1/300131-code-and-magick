'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClickOpen = function () {
  setup.classList.remove('invisible');
};
setupOpen.addEventListener('click', setupClickOpen);


var setupClose = document.querySelector('.setup-close');
var setupClickClose = function () {
  setup.classList.add('invisible');
};
setupClose.addEventListener('click', setupClickClose);

var nameInput = document.querySelector('.setup-user-name');
nameInput.required = true;
nameInput.maxLength = 50;

// var clearInputValue = function (evt) {
//   evt.target.value = ''; 
// };
// nameInput.addEventListener('click', clearInputValue);

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

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[Math.floor(Math.random() * wizardCoatColors.length)];
});
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)];
});
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = fireballColors[Math.floor(Math.random() * fireballColors.length)];
});
