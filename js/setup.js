'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');
  var setupSimilar = document.querySelector('.setup-similar');
  var setupWizard = document.querySelector('.setup-wizard');
  var buttonSubmit = document.querySelector('.setup-submit');
  var dataURL = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';
  window.setupSimilar = setupSimilar;

  var buttonSubmitClosed = function (evt) {
    evt.preventDefault();
    if (!setup.classList.contains('invisible')) {
      if (evt.keyCode === 13) {
        setup.classList.add('invisible');
      }
    }
    buttonSubmit.setAttribute('aria-pressed', 'true');
  };

  var wizardsDataLoaded = function (data) {
    setupSimilar.innerHTML = '';
    var wizards = data;
    var fiveWizards = [];
    var index;
    for (index = 0; index < 5; index++) {
      var randomIndex = Math.floor(Math.random() * wizards.length);
      var randomElement = wizards.splice(randomIndex, 1)[0];
      fiveWizards.push(randomElement);
    }
    for (var j = 0; j < fiveWizards.length; j++) {
      var cloned = setupWizard.cloneNode(true);
      cloned.classList.remove('setup-wizard');
      cloned.classList.add('similar-wizard-img');
      var children = cloned.querySelectorAll('*');
      for (var i = 0; i < children.length; i++) {
        if (children[i].hasAttribute('id')) {
          var id = children[i].id;
          children[i].classList.add(id);
          children[i].removeAttribute('id');
        }
      }
      var coat = cloned.querySelector('.wizard-coat');
      coat.style.fill = fiveWizards[j].colorCoat;
      var eyes = cloned.querySelector('.wizard-eyes');
      eyes.style.fill = fiveWizards[j].colorEyes;

      var div = document.createElement('div');
      div.className = 'similar-wizard';
      var span = document.createElement('span');
      span.className = 'similar-wizard-title';

      div.appendChild(cloned);
      div.appendChild(span);
      setupSimilar.appendChild(div);
      span.innerHTML = fiveWizards[j].name;
    }
  };

  var Dialog = {
    open: function () {
      if (!setup.classList.contains('invisible')) {
        return;
      }
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

  window.colorizeElement(wizardCoat, wizardCoatColors, 'fill', function () {
    window.load(dataURL, wizardsDataLoaded);
  });
  window.colorizeElement(wizardEyes, wizardEyesColors, 'fill', function () {
    window.load(dataURL, wizardsDataLoaded);
  });
  window.colorizeElement(wizardFireball, fireballColors, 'backgroundColor', function () {
    window.load(dataURL, wizardsDataLoaded);
  });

})();
