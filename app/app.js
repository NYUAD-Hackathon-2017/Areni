'use strict';

// Declare app level module which depends on views, and components
angular.module('Areni', [
  'ngRoute',
  'Areni.search',
  'Areni.view2',
  'Areni.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/search'});
}]);
