(function () {
"use strict";

angular.module('public')
.controller('PersonController', PersonController);

PersonController.$inject = ['teammate'];
function PersonController(teammate) {
  var personController = this;
  personController.person = teammate;
}


})();


