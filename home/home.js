'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$location','$http',function($scope,$location,$http) {




        var url = "http://80.85.85.222/getCategory";
        console.log('URL built is ' + url)




        var responsePromise = $http.get(url);
        var respData;
        

        responsePromise.success(function(data, status, headers, config) {
//                    $scope.myData = data.eventName;
            console.log("data:" + data[0])
            respData = data;

            $scope.categories = data;
        });
        responsePromise.error(function(data, status, headers, config) {
//                    alert("AJAX failed!"+headers);
            $scope.errorMessage = "failed to fetch the data ";
        });















$scope.showEvents = function(pos) {
    currentCategory = respData[pos];
    
    $location.path("/viewEvents");
    
    };


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