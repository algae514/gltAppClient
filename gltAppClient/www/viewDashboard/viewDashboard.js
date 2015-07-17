'use strict';

angular.module('myApp.viewDashboard', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewDashboard', {
            templateUrl: 'viewDashboard/viewDashboard.html',
            controller: 'ViewDashboardCtrl'
        });
    }])

        .controller('ViewDashboardCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
        $scope.errorMessage = '';



        var url = "http://localhost:9000/getDashBoard/" + currentCategory;
        console.log('URL built is ' + url)




        var responsePromise = $http.get(url);


        responsePromise.success(function(data, status, headers, config) {
//                    $scope.myData = data.eventName;
            console.log("data:" + data[0])

            $scope.comments = data;
        });
        responsePromise.error(function(data, status, headers, config) {
//                    alert("AJAX failed!"+headers);
            $scope.errorMessage = "failed to fetch the data ";
        });




        $scope.goHome = function() {
            $location.path("/home");
        }

        $scope.viewDashBoard = function(eventName) {
            currentEvent = eventName;
            $location.path("/viewDashboard");
        }





    }]);