'use strict';

angular.module('Areni.teacher', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teacher/:id', {
    templateUrl: 'teacher/teacher.html',
    controller: 'teacherCtrl'
  });
}])

.constant('config', {
    rltm: {
        service: "pubnub",
        config: {
            publishKey: "pub-c-ebadfe7c-3585-4105-bcd8-f0b3cc229099",
            subscribeKey: "sub-c-872b1e12-219f-11e7-a9ec-0619f8945a4f"
        }
        // or use socket.io!
        // https://github.com/pubnub/rltm.js#socketio
    }
})

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

  // // Message Inbox
  // $scope.messages = [];
  //
  // // Receive Messages
  // Messages.receive(function(message) {
  //   $scope.messages.push(message);
  // });
  //
  // // Send Messages
  // $scope.send = function() {
  //   Messages.send({
  //     data: $scope.textbox
  //   });
  // };

}]);
