(function () {
"use strict";

angular.module('public')
.controller('TeamController', TeamController);

TeamController.$inject = ['founders','experts'];
function TeamController(founders,experts) {
  var teamController = this;
  teamController.founders = founders;
  teamController.experts = experts;  
 
}


})();


