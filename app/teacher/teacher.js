'use strict';

angular.module('Areni.teacher', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teacher/:id', {
    templateUrl: 'teacher/teacher.html',
    controller: 'teacherCtrl'
  })
  .when('/teacher/:id/:session', {
    templateUrl: 'teacher/teacher.html',
    controller: 'teacherCtrl'
  });
}])


.controller('teacherCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.session = $routeParams.session != null;

  $scope.teachers = [
    {
      "name": "Simon S.",
      "username": "silverelephant727",
      "img": "https://randomuser.me/api/portraits/men/52.jpg",
      "subj": "Math",
      "Lat": 47.6138333,
      "Lng": -122.3263265,
      "date": "Monday",
      "loc": "Tully's Coffee",
      "language": [
        "English" , "Arabic"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 0.3
    },
    {
      "name": "Eduardo H.",
      "username": "crazyelephant598",
      "img": "https://randomuser.me/api/portraits/men/17.jpg",
      "subj": "Geology",
      "Lat": 47.6093364,
      "Lng": -122.3280238,
      "date": "Tuesday",
      "loc": "Sugar Bakery & Cafe",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 0.1
    },
    {
      "name": "Jayden C.",
      "username": "reddog828",
      "img": "https://randomuser.me/api/portraits/men/55.jpg",
      "subj": "Music",
      "Lat": 47.6093364,
      "Lng": -122.3345898,
      "date": "Wednesday",
      "loc": "Peet's Coffee & Tea",
      "language": [
        "English", "Spanish"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 0.2
    },
    {
      "name": "Malo M.",
      "username": "bigtiger125",
      "img": "https://randomuser.me/api/portraits/men/70.jpg",
      "subj": "English",
      "Lat": 47.6085471,
      "Lng": -122.3432501,
      "date": "Thursday",
      "loc": "Chatterbox Cafe",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 0.6
    },
    {
      "name": "Laica M.",
      "username": "whiteostrich247",
      "img": "https://randomuser.me/api/portraits/women/45.jpg",
      "subj": "History",
      "Lat": 47.6194692,
      "Lng": -122.3623953,
      "date": "Friday",
      "loc": "Ambrosia Cafe",
      "language": [
        "English" ,"Arabic"
      ],
      "stars": 4,
      "time": "7:15 PM",
      "dist": 0.9
    },
    {
      "name": "Julie R.",
      "username": "lazyduck202",
      "img": "https://randomuser.me/api/portraits/women/59.jpg",
      "subj": "Geography",
      "Lat": 47.6019113,
      "Lng": -122.3314294,
      "date": "Saturday",
      "loc": "HardWok Cafe",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "5:00 PM",
      "dist": 1
    },
    {
      "name": "Fiete H.",
      "username": "greenbird933",
      "img": "https://randomuser.me/api/portraits/men/36.jpg",
      "subj": "Science",
      "Lat": 47.6171526,
      "Lng": -122.3353294,
      "date": "Saturday",
      "loc": "Row House Cafe",
      "language": [
        "English","Arabic"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 2.1
    },
    {
      "name": "Donald P.",
      "username": "purplepanda404",
      "img": "https://randomuser.me/api/portraits/men/53.jpg",
      "subj": "Math",
      "Lat": 47.6081826,
      "Lng": -122.3381877,
      "date": "Sunday",
      "loc": "Regent Bakery & Cafe",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 0.9
    },
    {
      "name": "Aaron W.",
      "username": "silverfish199",
      "img": "https://randomuser.me/api/portraits/men/65.jpg",
      "subj": "Geology",
      "Lat": 47.6152231,
      "Lng": -122.3283525,
      "date": "Monday",
      "loc": "Cafe Solstice",
      "language": [
        "English", "Spanish"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 1.4
    },
    {
      "name": "Sofie M.",
      "username": "purpleladybug159",
      "img": "https://randomuser.me/api/portraits/women/84.jpg",
      "subj": "Music",
      "Lat": 47.6145232,
      "Lng": -122.3325162,
      "date": "Tuesday",
      "loc": "Starbucks",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 1
    },
    {
      "name": "Sophia K.",
      "username": "yellowbird811",
      "img": "https://randomuser.me/api/portraits/women/32.jpg",
      "subj": "English",
      "Lat": 47.6138333,
      "Lng": -122.3263265,
      "date": "Wednesday",
      "loc": "Tully's Coffee",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "7:15 PM",
      "dist": 0.3
    },
    {
      "name": "Marius S.",
      "username": "organicrabbit629",
      "img": "https://randomuser.me/api/portraits/men/36.jpg",
      "subj": "History",
      "Lat": 47.6093364,
      "Lng": -122.3280238,
      "date": "Thursday",
      "loc": "Sugar Bakery & Cafe",
      "language": [
        "English", "Spanish"
      ],
      "stars": 5,
      "time": "5:00 PM",
      "dist": 0.1
    },
    {
      "name": "Marius M.",
      "username": "tinysnake128",
      "img": "https://randomuser.me/api/portraits/men/73.jpg",
      "subj": "Geography",
      "Lat": 47.6093364,
      "Lng": -122.3345898,
      "date": "Friday",
      "loc": "Peet's Coffee & Tea",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 0.2
    },
    {
      "name": "Lilly O.",
      "username": "beautifulwolf410",
      "img": "https://randomuser.me/api/portraits/women/51.jpg",
      "subj": "Science",
      "Lat": 47.6085471,
      "Lng": -122.3432501,
      "date": "Saturday",
      "loc": "Chatterbox Cafe",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 0.6
    },
    {
      "name": "آرتين ز.",
      "username": "yellowwolf450",
      "img": "https://randomuser.me/api/portraits/men/12.jpg",
      "subj": "Math",
      "Lat": 47.6194692,
      "Lng": -122.3623953,
      "date": "Saturday",
      "loc": "Ambrosia Cafe",
      "language": [
        "English","Spanish"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 0.9
    },
    {
      "name": "Alex M.",
      "username": "bigdog267",
      "img": "https://randomuser.me/api/portraits/men/18.jpg",
      "subj": "Geology",
      "Lat": 47.6019113,
      "Lng": -122.3314294,
      "date": "Sunday",
      "loc": "HardWok Cafe",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 1
    },
    {
      "name": "John K.",
      "username": "beautifulpeacock932",
      "img": "https://randomuser.me/api/portraits/men/97.jpg",
      "subj": "Music",
      "Lat": 47.6171526,
      "Lng": -122.3353294,
      "date": "Monday",
      "loc": "Row House Cafe",
      "language": [
        "English","Arabic"
      ],
      "stars": 4,
      "time": "7:15 PM",
      "dist": 2.1
    },
    {
      "name": "Alfeu D.",
      "username": "redleopard437",
      "img": "https://randomuser.me/api/portraits/men/22.jpg",
      "subj": "English",
      "Lat": 47.6081826,
      "Lng": -122.3381877,
      "date": "Tuesday",
      "loc": "Regent Bakery & Cafe",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "5:00 PM",
      "dist": 0.9
    },
    {
      "name": "Ross B.",
      "username": "brownpeacock876",
      "img": "https://randomuser.me/api/portraits/men/61.jpg",
      "subj": "History",
      "Lat": 47.6152231,
      "Lng": -122.3283525,
      "date": "Wednesday",
      "loc": "Cafe Solstice",
      "language": [
        "English","Arabic"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 1.4
    },
    {
      "name": "Matéo D.",
      "username": "whitedog296",
      "img": "https://randomuser.me/api/portraits/men/89.jpg",
      "subj": "Geography",
      "Lat": 47.6145232,
      "Lng": -122.3325162,
      "date": "Thursday",
      "loc": "Starbucks",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 1
    },
    {
      "name": "Tea M.",
      "username": "tinyduck611",
      "img": "https://randomuser.me/api/portraits/women/51.jpg",
      "subj": "Science",
      "Lat": 47.6138333,
      "Lng": -122.3263265,
      "date": "Friday",
      "loc": "Tully's Coffee",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 0.3
    },
    {
      "name": "محیا ك.",
      "username": "tinybear822",
      "img": "https://randomuser.me/api/portraits/women/50.jpg",
      "subj": "Math",
      "Lat": 47.6093364,
      "Lng": -122.3280238,
      "date": "Saturday",
      "loc": "Sugar Bakery & Cafe",
      "language": [
        "English", "Spanish"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 0.1
    },
    {
      "name": "Samuel P.",
      "username": "crazygoose926",
      "img": "https://randomuser.me/api/portraits/men/29.jpg",
      "subj": "Geology",
      "Lat": 47.6093364,
      "Lng": -122.3345898,
      "date": "Saturday",
      "loc": "Peet's Coffee & Tea",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "7:15 PM",
      "dist": 0.2
    },
    {
      "name": "Daniel B.",
      "username": "blackfrog232",
      "img": "https://randomuser.me/api/portraits/men/3.jpg",
      "subj": "Music",
      "Lat": 47.6085471,
      "Lng": -122.3432501,
      "date": "Sunday",
      "loc": "Chatterbox Cafe",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "5:00 PM",
      "dist": 0.6
    },
    {
      "name": "Marie P.",
      "username": "ticklishfish609",
      "img": "https://randomuser.me/api/portraits/women/6.jpg",
      "subj": "English",
      "Lat": 47.6194692,
      "Lng": -122.3623953,
      "date": "Monday",
      "loc": "Ambrosia Cafe",
      "language": [
        "English"
      ],
      "stars": 3,
      "time": "3:00 PM",
      "dist": 0.9
    },
    {
      "name": "Rosalyn B.",
      "username": "bigmouse238",
      "img": "https://randomuser.me/api/portraits/women/79.jpg",
      "subj": "History",
      "Lat": 47.6019113,
      "Lng": -122.3314294,
      "date": "Tuesday",
      "loc": "HardWok Cafe",
      "language": [
        "English"
      ],
      "stars": 4,
      "time": "8:00 PM",
      "dist": 1
    },
    {
      "name": "Juho H.",
      "username": "organicmeercat879",
      "img": "https://randomuser.me/api/portraits/men/91.jpg",
      "subj": "Geography",
      "Lat": 47.6171526,
      "Lng": -122.3353294,
      "date": "Wednesday",
      "loc": "Row House Cafe",
      "language": [
        "English"
      ],
      "stars": 5,
      "time": "4:30 PM",
      "dist": 2.1
    },
    {
      "name": "Mason L.",
      "username": "greenbear524",
      "img": "https://randomuser.me/api/portraits/men/62.jpg",
      "subj": "Science",
      "Lat": 47.6081826,
      "Lng": -122.3381877,
      "date": "Thursday",
      "loc": "Regent Bakery & Cafe",
      "language": [
        "English","Arabic"
      ],
      "stars": 3,
      "time": "6:00 PM",
      "dist": 0.9
    },
    {
      "name": "Angus J.",
      "username": "smalldog349",
      "img": "https://randomuser.me/api/portraits/men/1.jpg",
      "subj": "Math",
      "Lat": 47.6152231,
      "Lng": -122.3283525,
      "date": "Friday",
      "loc": "Cafe Solstice",
      "language": [
        "English","Arabic"
      ],
      "stars": 4,
      "time": "7:15 PM",
      "dist": 1.4
    },
    {
      "name": "Stella N.",
      "username": "yellowfish782",
      "img": "https://randomuser.me/api/portraits/women/1.jpg",
      "subj": "Geology",
      "Lat": 47.6145232,
      "Lng": -122.3325162,
      "date": "Saturday",
      "loc": "Starbucks",
      "language": [
        "English" , "Arabic"
      ],
      "stars": 5,
      "time": "5:00 PM",
      "dist": 1
    }
  ];

  $scope.teacher = $scope.teachers.filter(function(obj) {
    return obj.username == $routeParams.id;
  })[0];

  console.log($scope.teacher)

  // Map
  var marker = $scope.teacher.Lat + "," + $scope.teacher.Lng;
  var center = ($scope.teacher.Lat - .02) + "," + ($scope.teacher.Lng - .02);

  $scope.getMapUrl = function(width, height) {
    return 'https://maps.googleapis.com/maps/api/staticmap?center='
    + center
    + '&zoom=12'
    + '&size=' + width + 'x' + height
    + '&maptype=terrain&scale=2'
    + '&markers=color:red%7C' + marker
    + '&key=AIzaSyCjMEFBNCop_GlyWgkkOpD90A10g2yL0nE'
  }

  // Chat
  // Initializes FriendlyChat.
  function FriendlyChat() {
    this.checkSetup();

    // Shortcuts to DOM Elements.
    this.messageList = document.getElementById('messages');
    this.messageForm = document.getElementById('message-form');
    this.messageInput = document.getElementById('message');
    this.submitButton = document.getElementById('submit');
    this.userPic = document.getElementById('user-pic');
    this.userName = document.getElementById('user-name');
    this.signInButton = document.getElementById('sign-in');
    this.signOutButton = document.getElementById('sign-out');

    // Saves message on form submit.
    this.messageForm.addEventListener('submit', this.saveMessage.bind(this));
    this.signOutButton.addEventListener('click', this.signOut.bind(this));
    this.signInButton.addEventListener('click', this.signIn.bind(this));

    // Toggle for the button.
    var buttonTogglingHandler = this.toggleButton.bind(this);
    this.messageInput.addEventListener('keyup', buttonTogglingHandler);
    this.messageInput.addEventListener('change', buttonTogglingHandler);

    this.initFirebase();
  }

  // Sets up shortcuts to Firebase features and initiate firebase auth.
  FriendlyChat.prototype.initFirebase = function() {
    this.auth = firebase.auth();
    this.database = firebase.database();
    this.storage = firebase.storage();
    // Initiates Firebase auth and listen to auth state changes.
    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));

  };

  // Loads chat messages history and listens for upcoming ones.
  FriendlyChat.prototype.loadMessages = function() {
    this.messagesRef = this.database.ref('messages');
    // Make sure we remove all previous listeners.
    this.messagesRef.off();

    // Loads the last 12 messages and listen for new ones.
    var setMessage = function(data) {
      var val = data.val();
      this.displayMessage(data.key, val.name, val.text, val.photoUrl, val.imageUrl);
    }.bind(this);
    this.messagesRef.limitToLast(12).on('child_added', setMessage);
    this.messagesRef.limitToLast(12).on('child_changed', setMessage);


  };

  // Saves a new message on the Firebase DB.
  FriendlyChat.prototype.saveMessage = function(e) {
    e.preventDefault();
    // Check that the user entered a message and is signed in.
    if (this.messageInput.value && this.checkSignedIn()) {
      var currentUser = this.auth.currentUser;
      // Add a new message entry to the Firebase Database.
      this.messagesRef.push({
        name: currentUser.displayName,
        text: this.messageInput.value,
        photoUrl: currentUser.photoURL || ''
      }).then(function() {
        // Clear message text field and SEND button state.
        FriendlyChat.resetMaterialTextfield(this.messageInput);
        this.toggleButton();
      }.bind(this)).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });
    }
  };




  // Signs-in Friendly Chat.
  FriendlyChat.prototype.signIn = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
  };

  // Signs-out of Friendly Chat.
  FriendlyChat.prototype.signOut = function() {
    this.auth.signOut();
  };

  // Triggers when the auth state change for instance when the user signs-in or signs-out.
  FriendlyChat.prototype.onAuthStateChanged = function(user) {
    if (user) { // User is signed in!
      // Get profile pic and user's name from the Firebase user object.
      var profilePicUrl = user.photoURL;   // TODO(DEVELOPER): Get profile pic.
      var userName = user.displayName;        // TODO(DEVELOPER): Get user's name.

      // Set the user's profile pic and name.
      this.userPic.style.backgroundImage = 'url(' + profilePicUrl + ')';
      // this.userName.textContent = userName;

      // Show user's profile and sign-out button.
      // this.signOutButton.removeAttribute('hidden');

      // Hide sign-in button.
      // this.signInButton.setAttribute('hidden', 'true');

      // We load currently existing chant messages.
      this.loadMessages();

      // We save the Firebase Messaging Device token and enable notifications.
      this.saveMessagingDeviceToken();
    } else { // User is signed out!
      // Hide user's profile and sign-out button.
      // this.signOutButton.setAttribute('hidden', 'true');

      // Show sign-in button.
      // this.signInButton.removeAttribute('hidden');
    }
  };

  // Returns true if user is signed-in. Otherwise false and displays a message.
  FriendlyChat.prototype.checkSignedIn = function() {
    if (this.auth.currentUser) {
      return true;
    }

    return false;
  };

  // Saves the messaging device token to the datastore.
  FriendlyChat.prototype.saveMessagingDeviceToken = function() {
    // TODO(DEVELOPER): Save the device token in the realtime datastore
  };

  // Requests permissions to show notifications.
  FriendlyChat.prototype.requestNotificationsPermissions = function() {
    // TODO(DEVELOPER): Request permissions to send notifications.
  };

  // Resets the given MaterialTextField.
  FriendlyChat.resetMaterialTextfield = function(element) {
    element.value = '';
    element.parentNode.MaterialTextfield.boundUpdateClassesHandler();
  };

  // Template for messages.
  FriendlyChat.MESSAGE_TEMPLATE =
  '<li class="message-container list-group-item">' +
  '<div class="spacing"><div class="pic"></div></div>' +
  '<div class="message"></div>' +
  '<div class="name"></div>' +
  '</li>';

  // A loading image URL.
  FriendlyChat.LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';

  // Displays a Message in the UI.
  FriendlyChat.prototype.displayMessage = function(key, name, text, picUrl, imageUri) {
    var div = document.getElementById(key);
    // If an element for that message does not exists yet we create it.
    if (!div) {
      var container = document.createElement('li');
      container.innerHTML = FriendlyChat.MESSAGE_TEMPLATE;
      div = container.firstChild;
      div.setAttribute('id', key);
      this.messageList.appendChild(div);
    }
    if (picUrl) {
      div.querySelector('.pic').style.backgroundImage = 'url(' + picUrl + ')';
    }
    div.querySelector('.name').textContent = name;
    var messageElement = div.querySelector('.message');
    if (text) { // If the message is text.
      messageElement.textContent = text;
      // Replace all line breaks by <br>.
      messageElement.innerHTML = messageElement.innerHTML.replace(/\n/g, '<br>');
    }
    // Show the card fading-in.
    setTimeout(function() {div.classList.add('visible')}, 1);
    this.messageList.scrollTop = this.messageList.scrollHeight;
    this.messageInput.focus();

    $("#message-form").scrollTop($("#message-form")[0].scrollHeight);
  };

  // Enables or disables the submit button depending on the values of the input
  // fields.
  FriendlyChat.prototype.toggleButton = function() {
    if (this.messageInput.value) {
      this.submitButton.removeAttribute('disabled');
    } else {
      this.submitButton.setAttribute('disabled', 'true');
    }
  };

  // Checks that the Firebase SDK has been correctly setup and configured.
  FriendlyChat.prototype.checkSetup = function() {
    if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
      window.alert('You have not configured and imported the Firebase SDK. ' +
      'Make sure you go through the codelab setup instructions.');
    } else if (config.storageBucket === '') {
      window.alert('Your Cloud Storage bucket has not been enabled. Sorry about that. This is ' +
      'actually a Firebase bug that occurs rarely. ' +
      'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
      'and make sure the storageBucket attribute is not empty. ' +
      'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
      'displayed there.');
    }
  };

  window.onload = function() {
    window.friendlyChat = new FriendlyChat();
  };


}]);
