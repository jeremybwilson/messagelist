'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'firebase',
  'myApp.messages'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

$routeProvider
  .when('/', 
  {
    controller: 'MessagesCtrl',
    templateUrl: '/messages/messages.html'
  })
  //Define a route that has a route parameter in it (:customerID)
  .otherwise({redirectTo: '/'});
}]);
