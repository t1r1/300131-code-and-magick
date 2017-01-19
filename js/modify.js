'use strict';

var fireballSize = 22;

var getFireballSpeed = function(left) {
    if (left == true) {
        return 5;  
    }
    else {
        return 2; 
    }
};


var wizardSpeed = 3;
var wizardWidth = 70;

var getWizardHeight = function() {
    var wizardHeight = wizardWidth * 1.337;
    // console.log('wizard height is ', wizardHeight);
    return wizardHeight;
};


function getWizardX(width) {
    var wizardX = width / 2 - wizardWidth/2;
    // console.log('wizardX is', wizardX);
    return wizardX;
};


function getWizardY(height) {
    var position = height / 3 - getWizardHeight();
    return position;
};
