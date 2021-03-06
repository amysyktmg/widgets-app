'use strict';

angular
  .module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'app'
  ])

  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);