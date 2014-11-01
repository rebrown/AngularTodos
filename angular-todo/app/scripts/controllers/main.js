'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTodoApp
 */
angular.module('angularTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function() {
        if ($scope.todo.length > 2) {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        }
    };

    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    }

  });
