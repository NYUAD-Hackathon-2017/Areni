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
      "dist": 0.3,
      "date": "Monday",
      "loc": "Starbucks",
      "img": "https://randomuser.me/api/portraits/women/13.jpg"
    },
    {
      "name": "Matt S.",
      "subj": ["English", "Writing", "History"],
      "dist": 1.2,
      "date": "Wednesday",
      "loc": "Seattle Public Library",
      "img": "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

}]);
