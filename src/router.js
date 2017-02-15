angular.module('router', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'src/module/home/home.html',
    controller: 'HomeCtrl'
  })
  .when('/contact', {
    templateUrl: 'src/module/contact/contact.html',
    controller: 'ContactCtrl'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});
