'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.addEvent',
  'myApp.viewEvents',
  'myApp.viewDashboard',
  'myApp.addCategory',
  'myApp.category',
  'myApp.addUserComment',
  'myApp.addAdminComment',
  'myApp.home'
  
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
