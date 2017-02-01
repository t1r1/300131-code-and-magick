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
  if (!setup.classList.contains('invisible')) {
    if (evt.keyCode === 13) {
      setup.classList.add('invisible'); // [Вопрос] почему скрытие диалога работает и по нажатию Enter, и по клику, тогда как обработчик навешан только на событие keydown? см. строку 52
    }
  }
  buttonSubmit.setAttribute('aria-pressed', 'true'); // [Вопрос] не работает ни по какому событию - ?
};


setupOpen.addEventListener('click', setupClickOpen);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('invisible');
  }
});

setupClose.addEventListener('click', setupClickClose);

// [задание] Если диалог открыт и фокус находится на крестике, то нажатие клавиши ENTER приводит к закрытию диалога
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.add('invisible');
  }
});

// [задание] Когда диалог открыт, то клавиша ESC должна закрывать диалог.
document.addEventListener('keydown', function (evt) { // по хорошему, и здесь надо делать проверку на то, открыт ли диалог (нет класса invisible), но и так работает - насколько это критично?
  if (evt.keyCode === 27) {
    setup.classList.add('invisible');
  }
});

// [задание] Если диалог открыт, нажатие на кнопку «Сохранить» приводит к закрытию диалога.
// [задание] Если диалог открыт и фокус находится на кнопке «Сохранить», нажатие на ENTER приводит к закрытию диалога

buttonSubmit.addEventListener('keydown', buttonSubmitClosed); // [Вопрос] К вопросу на стр. 18. Почему функция, закрывающая окно по наэатию Enter на кнопке "Сохранить" работает без навешивания addEventListener по событию click, а работают оба с событием keydown?

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

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[Math.floor(Math.random() * wizardCoatColors.length)];
});
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)];
});
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = fireballColors[Math.floor(Math.random() * fireballColors.length)];
});
