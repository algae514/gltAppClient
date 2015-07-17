'use strict';

angular.module('myApp.addEvent', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addEvent', {
    templateUrl: 'addEvent/addEvent.html',
    controller: 'AddEventCtrl'
  });
}])

.controller('AddEventCtrl', [function() {

}]);