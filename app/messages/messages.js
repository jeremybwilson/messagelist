'use strict';

angular.module('myApp.messages', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'messages/messages.html',
    controller: 'MessagesCtrl'
  });
}])

.controller('MessagesCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {
  // var ref = new Firebase('https://contactlist-835b5.firebaseio.com/');
  /* above is the old way of connecting, instead use config in index.html file */

  $scope.messages = $firebaseArray(rootRef);

  $scope.addMessage = function(){
    console.log('Adding messags...');

    $scope.messages.$add({
      msgtitle: $scope.msgtitle,
      msgbody: $scope.msgbody
    }).then(function(rootRef){
      var id = rootRef.key();
      console.log('Added Message ' +id);

      $scope.msgtitle = '';
      $scope.msgbody = '';
    });
  };

  $scope.removeMessage = function(message){
    $scope.messages.$remove(messags)
  }

}]);