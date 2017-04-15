'use strict';

angular.module('Areni.teacher', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teacher/:id', {
    templateUrl: 'teacher/teacher.html',
    controller: 'teacherCtrl'
  });
}])

.controller('teacherCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  // TODO: Get name from ID
  console.log($routeParams.id)

  $scope.teacher = {
    "name": "Sara L.",
    "subj": ["Algebra", "Trigonometry", "Geometry"],
    "Lat":  52.420008,
    "Lng":  13.404954,
    "dist": 0.3,
    "date": "Monday",
    "loc": "Starbucks",
    "img": "https://randomuser.me/api/portraits/women/13.jpg"
  };

  // Chat

  


}]);
