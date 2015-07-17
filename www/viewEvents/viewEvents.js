'use strict';

angular.module('myApp.viewEvents', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewEvents', {
            templateUrl: 'viewEvents/viewEvents.html',
            controller: 'ViewEventsCtrl'
        });
    }])

        .controller('ViewEventsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
        $scope.errorMessage = '';



        var url = "http://80.85.85.222:9000/getEvent/" + currentCategory;
        console.log('URL built is ' + url)




        var responsePromise = $http.get(url);
        var respData;
        

        responsePromise.success(function(data, status, headers, config) {
//                    $scope.myData = data.eventName;
            console.log("data:" + data[0].eventName)
            respData = data;

            $scope.events = data;
        });
        responsePromise.error(function(data, status, headers, config) {
//                    alert("AJAX failed!"+headers);
            $scope.errorMessage = "failed to fetch the data ";
        });




        $scope.goHome = function() {
            $location.path("/home");
        };

        $scope.viewDashBoardPage = function(thisEle) {
            console.log("recieved something >>"+respData[thisEle].eventName)
            
//            var eventName = eventEle;
//            
            currentEvent = respData[thisEle].eventName;
            console.log("currentEvent : "+currentEvent)
            $location.path("/viewDashboard");
        };





    }]);