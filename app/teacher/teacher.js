'use strict';

angular.module('Areni.teacher', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teacher/:id', {
    templateUrl: 'teacher/teacher.html',
    controller: 'teacherCtrl'
  });
}])

.controller('teacherCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  var teachers = [
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

  $scope.teacher = teachers.filter(function(obj) {
    return obj.username == $routeParams.id;
  })[0];

  console.log($scope.teacher)

  // Map
  var center = $scope.teacher.Lat + "," + $scope.teacher.Lng;
  $scope.mapurl = 'https://maps.googleapis.com/maps/api/staticmap?center=' + center + '&zoom=11&size=640x320&maptype=terrain&scale=2' + '&key=AIzaSyCjMEFBNCop_GlyWgkkOpD90A10g2yL0nE'


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
    if (!this.checkSignedIn())
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
