'use strict';

angular.module('Areni.sessions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sessions', {
    templateUrl: 'sessions/sessions.html',
    controller: 'sessionsCtrl'
  });
}])

.controller('sessionsCtrl', ['$scope', function($scope) {
  $scope.teachers = [
    {
      "name": "Alizee A.",
      "username": "yellowmeercat138",
      "img": "https://randomuser.me/api/portraits/women/18.jpg",
      "subj": "Math",
      "Lat": 47.6138333,
      "Lng": -122.3263265,
      "date": "Sunday",
      "loc": "Tully's Coffee",
      "dist": 0.3,
      "stars": 4,
      "time": "11:00 AM"
    },
    {
      "name": "Anni S.",
      "username": "beautifulpeacock749",
      "img": "https://randomuser.me/api/portraits/women/61.jpg",
      "subj": "Geology",
      "Lat": 47.6093364,
      "Lng": -122.3280238,
      "date": "Monday",
      "loc": "Sugar Bakery & Cafe",
      "dist": 0.1,
      "stars": 4,
      "time": "5:00 PM"
    },
    {
      "name": "Eden D.",
      "username": "tinygoose706",
      "img": "https://randomuser.me/api/portraits/women/41.jpg",
      "subj": "Music",
      "Lat": 47.6093364,
      "Lng": -122.3345898,
      "date": "Tuesday",
      "loc": "Peet's Coffee & Tea",
      "dist": 0.2,
      "stars": 4,
      "time": "2:00 PM"
    },
    {
      "name": "Zoe C.",
      "username": "smallmeercat885",
      "img": "https://randomuser.me/api/portraits/women/54.jpg",
      "subj": "English",
      "Lat": 47.6085471,
      "Lng": -122.3432501,
      "date": "Wednesday",
      "loc": "Chatterbox Cafe",
      "dist": 0.6,
      "stars": 5,
      "time": "6:00 PM"
    },
    {
      "name": "Mathis K.",
      "username": "brownleopard667",
      "img": "https://randomuser.me/api/portraits/men/43.jpg",
      "subj": "History",
      "Lat": 47.6171526,
      "Lng": -122.3623953,
      "date": "Thursday",
      "loc": "Ambrosia Cafe",
      "dist": 0.9,
      "stars": 3,
      "time": "12:00 PM"
    },
    {
      "name": "Britney F.",
      "username": "blackgoose337",
      "img": "https://randomuser.me/api/portraits/women/42.jpg",
      "subj": "Geology",
      "Lat": 47.6019113,
      "Lng": -122.3314294,
      "date": "Friday",
      "loc": "HardWok Cafe",
      "dist": 1,
      "stars": 4,
      "time": "3:00 PM"

    },
    {
      "name": "Mila C.",
      "username": "bigrabbit400",
      "img": "https://randomuser.me/api/portraits/women/47.jpg",
      "subj": "Geography",
      "Lat": 47.6171526,
      "Lng": -122.3353294,
      "date": "Saturday",
      "loc": "Row House Cafe",
      "dist": 2.1,
      "stars": 5,
      "time": "1:00 PM"
    }
  ];

  $scope.subjects = [
    'English',
    'Geography',
    'Geology',
    'History',
    'Math',
    'Music',
    'Science'
  ];
  $scope.setSubject = function(s) {
    $scope.subject = s;
  }

  $scope.subject;


  var geocoder;
  var map;

  var infowindow = new google.maps.InfoWindow();

  //position.coords.longitude;
  //position.coords.latitude;

  $scope.initMarkers = function() {
    var marker, i;
    var image = 'http://www.everymanministries.com/Content/shared/images/usericon.png';

    for (i = 0; i < $scope.teachers.length; i++) {
      marker = new google.maps.Marker({
        position: {
          lat: $scope.teachers[i]['Lat'],
          lng: $scope.teachers[i]['Lng']
        },
        map: map,
        icon: image
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent($scope.teachers[i]['name'] + "<br/>" + $scope.teachers[i]['subj']+ "<br/>" +$scope.teachers[i]['date'] + "<br/>" +$scope.teachers[i]['loc']);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }

  $scope.onSuccess =  function(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    var latLong = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
      zoom: 10,
      center: latLong,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    $scope.initMarkers();

  }
  $scope.onError = function(error){
    // var longitude = ;
    // var latitude = ;
    // var latLong = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
      zoom: 13,
      center: {
        lat: 47.6080031,
        lng: -122.3274234
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    $scope.initMarkers();

  }
  navigator.geolocation.getCurrentPosition($scope.onSuccess, $scope.onError);


  $scope.groupComparator = function(item) {
    return $scope.teachers.indexOf(item.dist);
  }

  $scope.locationChange = function(item){
    return $scope.teachers.indexOf(item.subj);
  }

}

]);
