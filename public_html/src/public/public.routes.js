(function () {
    'use strict';
    angular.module('public')
            .config(routeConfig);
    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
                .state('public', {
                    absract: true,
                    templateUrl: 'src/public/public.html'
                })
                .state('public.home', {
                    url: '/',
                    templateUrl: 'src/public/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeController',
                    resolve: {
                        carousel1: ['IntensService', function (IntensService) {
                                return IntensService.getCarousel1();
                            }],
                        section2: ['IntensService', function (IntensService) {
                                return IntensService.getSection2();
                            }],
                        carousel2: ['IntensService', function (IntensService) {
                                return IntensService.getCarousel2();
                            }],
                        section4: ['IntensService', function (IntensService) {
                                return IntensService.getSection4();
                            }],
                        news: ['IntensService', function (IntensService) {
                                return IntensService.getNews();
                            }],
                        partners: ['IntensService', function (IntensService) {
                                return IntensService.getPartners();
                            }]
                        
                        
                    }
                    


                })
                .state('public.menu', {
                    url: '/menu',
                    templateUrl: 'src/public/menu/menu.html',
                    controller: 'MenuController',
                    controllerAs: 'menuCtrl',
                    resolve: {
                        menuCategories: ['MenuService', function (MenuService) {
                                return MenuService.getCategories();
                            }]
                    }
                })
                .state('public.menuitems', {
                    url: '/menu/{category}',
                    templateUrl: 'src/public/menu-items/menu-items.html',
                    controller: 'MenuItemsController',
                    controllerAs: 'menuItemsCtrl',
                    resolve: {
                        menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
                                return MenuService.getMenuItems($stateParams.category);
                            }]
                    }
                })


                .state('public.about', {
                    url: '/about',
                    templateUrl: 'src/public/about.html'
                })
                .state('public.awards', {
                    url: '/awards',
                    templateUrl: 'src/public/awards.html'
                })
                .state('public.info', {
                    url: '/info',
                    templateUrl: 'src/public/info/info.html',
                    controller: 'InfoController',
                    controllerAs: 'info'
                })
                .state('public.registration', {
                    url: '/registration',
                    templateUrl: 'src/public/registration/registration.html',
                    controller: 'RegistrationController',
                    controllerAs: 'reg'

                });
    }
})();
