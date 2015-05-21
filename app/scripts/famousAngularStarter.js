
angular.module('famousAngularStarter',
  ['ngAnimate', 'ngCookies',
    'ngTouch', 'ngSanitize',
    'ngResource', 'ui.router',
    'famous.angular' ]) // Dependencies
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .state('jade', {
        url: '/jade',
        templateUrl: 'partials/jade.html',
        controller: 'MainCtrl'
      })
      .state('demo', {
        url: '/demo',
        templateUrl: 'partials/demo.html',
        controller: 'DemoController'
      });

    $urlRouterProvider.otherwise('/');
  });
