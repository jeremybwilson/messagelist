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
    controller: 'AddMessagesCtrl',
    templateUrl: '/views/addMessages.html'
  })
  .when('/edit', 
  {
    controller: 'EditMessagesCtrl',
    templateUrl: '/views/editMessages.html'
  })
  //Define a route that has a route parameter in it (:customerID)
  .otherwise({redirectTo: '/'});
}]);
