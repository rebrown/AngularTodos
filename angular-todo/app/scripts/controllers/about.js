'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTodoApp
 */
angular.module('angularTodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
