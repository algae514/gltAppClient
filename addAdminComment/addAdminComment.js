'use strict';

angular.module('myApp.addAdminComment', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addAdminComment', {
    templateUrl: 'addAdminComment/addAdminComment.html',
    controller: 'AddAdminCommentCtrl'
  });
}])

.controller('AddAdminCommentCtrl', [function() {

}]);