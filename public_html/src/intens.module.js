(function() {
"use strict";


angular.module('intens', ['public'])
.config(config)
.constant('ApiPath', 'src/json');

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}

})();

