(function () {
    "use strict";

    angular.module('intens')
            .service('IntensService', IntensService);


    IntensService.$inject = ['$http', 'ApiPath'];
    function IntensService($http, ApiPath) {
        var service = this;

        service.user = {};
        service.registered = false;

        service.getCarousel1 = function () {
            return $http.get(ApiPath + '/carousel1.json').then(function (response) {
                return response.data;
            });
        };

        service.getSection2 = function () {
            return $http.get(ApiPath + '/section2.json').then(function (response) {
                return response.data;
            });
        };

        service.getCarousel2 = function () {
            return $http.get(ApiPath + '/carousel2.json').then(function (response) {
                return response.data;
            });
        };

        service.getSection4 = function () {
            return $http.get(ApiPath + '/section4.json').then(function (response) {
                return response.data;
            });
        };

        service.getNews = function () {
            return $http.get(ApiPath + '/news.json').then(function (response) {
                return response.data;
            });
        };

        service.getPartners = function () {
            return $http.get(ApiPath + '/partners.json').then(function (response) {
                return response.data;
            });
        };
        service.getFounders = function () {
            return $http.get(ApiPath + '/founders.json').then(function (response) {
                return response.data;
            });
        };
        service.getExperts = function () {

            return $http.get(ApiPath + '/experts.json').then(function (response) {
                return response.data;

            });
        };

        service.getPerson = function (id) {
            return $http.get(ApiPath + '/founders.json').then(function (response) {
                var person;
                person = response.data.find(record => record.id === id);
                return person;
            });
        };



    }



})();

