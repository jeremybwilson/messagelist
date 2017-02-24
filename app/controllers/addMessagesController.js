'use strict';

angular.module('myApp.messages', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', 
      {
        templateUrl: '/views/addMessages.html',
        controller: 'AddMessagesCtrl'
      })
    .when('/edit', 
      {
        templateUrl: '/views/editMessages.html',
        controller: 'EditMessagesCtrl'
      })
    .otherwise({redirectTo: '/'});
}])

.controller('AddMessagesCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {
  // var ref = new Firebase('https://contactlist-835b5.firebaseio.com/');
  /* above is the old way of connecting, instead use config in index.html file */

  $scope.messages = $firebaseArray(rootRef);

  $scope.addMessage = function(){
    console.log('Adding message...');

    $scope.messages.$add({
      msgtitle: $scope.msgtitle,
      msgbody: $scope.msgbody,
      msgstatus: $scope.msgstatus
    }).then(function(rootRef){
      var id = rootRef.key();
      console.log('Added Message ' +id);

      $scope.msgtitle = '';
      $scope.msgbody = '';
      $scope.msgstatus = '';
    });
  };
}]);