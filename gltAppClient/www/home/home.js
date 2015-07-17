'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$location',function($scope,$location) {

$scope.addEvent = function() {
    console.log("Test App addCategoryNGClick")
    };
    
$scope.viewEvent = function() {
    console.log("Test App addCategoryNGClick")
    };

$scope.showCricket = function() {
    console.log("Test App addCategoryNGClick")
    currentCategory = 'cricket';
    $location.path("/viewEvents");
    console.log("Test App after location metjh")
    };

$scope.showChess = function() {
    console.log("Test App addCategoryNGClick")
    currentCategory = 'chess';
    
    $location.path("/viewEvents");
    };

$scope.showFancyDress = function() {
    console.log("Test App addCategoryNGClick")
    currentCategory = 'FancyDress';
    $location.path("/viewEvents");
    };




}]);