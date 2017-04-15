'use strict';

angular.module('Areni.teacher', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teacher', {
    templateUrl: 'teacher/teacher.html',
    controller: 'teacherCtrl'
  });
}])

.controller('teacherCtrl', ['$scope', function($scope) {


}]);
