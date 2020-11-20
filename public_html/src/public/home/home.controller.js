(function () {
"use strict";

angular.module('public')
.controller('HomeController', HomeController);

HomeController.$inject = ['carousel1','section2','carousel2',
    'section4','news','partners'];
function HomeController(carousel1,section2,carousel2,section4,news,partners) {
  var homeController = this;
  homeController.carousel1 = carousel1;
  homeController.section2 = section2;
  homeController.carousel2=carousel2;
  homeController.section4 = section4;
  homeController.news=news;
  homeController.partners=partners;
}


})();


