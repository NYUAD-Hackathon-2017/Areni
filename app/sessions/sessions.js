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
    "dist": 0.3
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
    "dist": 0.1
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
    "dist": 0.2
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
    "dist": 0.6
  },
  {
    "name": "Mathis K.",
    "username": "brownleopard667",
    "img": "https://randomuser.me/api/portraits/men/43.jpg",
    "subj": "history",
    "Lat": 47.6074692,
    "Lng": -122.3623953,
    "date": "Thursday",
    "loc": "Ambrosia Cafe",
    "dist": 0.9
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
    "dist": 1
            
  },
  {
    "name": "Mila C.",
    "username": "bigrabbit400",
    "img": "https://randomuser.me/api/portraits/women/47.jpg",
    "subj": "geography",
    "Lat": 47.6171526,
    "Lng": -122.3353294,
    "date": "Saturday",
    "loc": "Row House Cafe",
    "dist": 2.1
  }
  ];

  var geocoder;
  var map;
  
  $scope.plsWork = 'subj';
  var infowindow = new google.maps.InfoWindow();

  //position.coords.longitude;
  //position.coords.latitude;

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

  }
   $scope.onError = function(error){
     alert("the code is " + error.code + ". \n" + "message: " + error.message);
   }
   navigator.geolocation.getCurrentPosition($scope.onSuccess, $scope.onError);
  


  var marker, i;
   var image = 'http://www.everymanministries.com/Content/shared/images/usericon.png';

  for (i = 0; i < $scope.teachers.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng($scope.teachers[i]['Lat'], $scope.teachers[i]['Lng']),
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

  
  $scope.groupComparator = function(item) {
      return $scope.teachers.indexOf(item.dist);
  console.log("Test1");
 
    console.log($scope.plsWork);
  }

  $scope.locationChange = function(item){
    return $scope.teachers.indexOf(item.subj);
  }
  $scope.update = function(){
    // locationChange($scope.teacher.subj);
    // item = $scope.teacher.subj;
    // return $scope.teachers.indexOf(item.dist);
    // item1 = $scope.plsWork;
    // return $scope.teachers.indexOf(item.item1);
    // $scope.plsWork = item;

    console.log("Test"+$scope.plsWork.subj);
  }

}

]);

