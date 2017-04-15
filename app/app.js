'use strict';

// Declare app level module which depends on views, and components
angular.module('Areni', [
  'ngRoute',
  'Areni.sessions',
  'Areni.login',
  'Areni.host',
  'Areni.teacher',
  'Areni.welcome',
  'Areni.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
