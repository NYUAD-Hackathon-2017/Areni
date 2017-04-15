'use strict';

angular.module('Areni.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'searchCtrl'
  });
}])

.controller('searchCtrl', ['$scope', function($scope) {
  $scope.teachers = [
    {
      "name": "Sara L.",
      "subj": ["Algebra", "Trigonometry", "Geometry"],
      "dist": 1.2,
      "date": "Monday",
      "img": "https://randomuser.me/api/portraits/women/13.jpg"
    }
  ];

}]);
