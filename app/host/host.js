'use strict';

angular.module('Areni.host', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/host', {
    templateUrl: 'host/host.html',
    controller: 'hostCtrl'
  });
}])

.controller('hostCtrl', ['$scope', function($scope) {


}]);
