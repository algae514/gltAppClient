'use strict';

angular.module('myApp.addUserComment', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addUserComment', {
    templateUrl: 'addUserComment/addUserComment.html',
    controller: 'AddUserCommentCtrl'
  });
}])

.controller('AddUserCommentCtrl', [function() {

}]);