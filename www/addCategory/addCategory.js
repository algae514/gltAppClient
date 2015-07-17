'use strict';

angular.module('myApp.addCategory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addCategory', {
    templateUrl: 'view1/addCategory.html',
    controller: 'AddCategoryCtrl'
  });
}])

.controller('AddCategoryCtrl', [function() {

}]);