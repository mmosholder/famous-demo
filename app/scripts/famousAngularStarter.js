
angular.module('famousAngularStarter',
  ['ngAnimate', 'ngCookies',
    'ngTouch', 'ngSanitize',
    'ngResource', 'ui.router',
    'famous.angular' ]) // Dependencies
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'index.html',
        views: {
          'indexTemplate': {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
          },
          'gridTemplate': {
            templateUrl: 'partials/demo.html',
            controller: 'DemoController'
          }
        }
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
      })
      .state('transition', {
        url: '/transition',
        templateUrl: 'partials/transition.html',
        controller: 'TransitionController'
      });

    $urlRouterProvider.otherwise('/');
  });
