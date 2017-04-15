'use strict';

angular.module('Areni.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'welcome/welcome.html',
    controller: 'welcomeCtrl'
  });
}])

.controller('welcomeCtrl', [function() {

}]);