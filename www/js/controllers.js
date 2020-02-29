var firebaseConfig = {
    apiKey: "AIzaSyDlvXHGjBJUIR-tOQ_qKHjZ57XBCYb5194",
    authDomain: "maxapp-efef6.firebaseapp.com",
    databaseURL: "https://maxapp-efef6.firebaseio.com",
    projectId: "maxapp-efef6",
    storageBucket: "maxapp-efef6.appspot.com",
    messagingSenderId: "209822104809",
    appId: "1:209822104809:web:34807fb8937b1ad326c478",
    measurementId: "G-487WDFMJRT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //base de datos
  var database = firebase.database();

angular.module('starter.controllers', [])

.controller("registroCtrl",function($scope){
  $scope.obtener = function(user){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.contra).then(function a(y){
      swal("se creo coorectamente YEAH")
        firebase.database().ref("/usuario").set()({
          correo: user.email
        })
        firebase.auth().singOut().then(fuction(){
        //Sing-out successful.
        }).catch(function(error){
        //An error happened
        }):
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });

  }
})

//vista inicio
.controller("loginCtrl",function($scope){

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
