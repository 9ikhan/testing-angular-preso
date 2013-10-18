(function (angular) {
    angular.module('TodoApp', ['ngResource'])
        .factory('Todo', function ($resource) {
            return $resource('/api/todos/:_id', {
                _id: '@_id'
            });
        })
        .controller('MainCtrl', function ($scope, Todo) {
            $scope.todos = Todo.query();

            var baseForm = {
                name: '',
                complete: false
            };
            $scope.form = angular.copy(baseForm);

            this.createTodo = function () {
                var todo = new Todo($scope.form);
                todo.$save();

                $scope.todos.push(todo);
                $scope.form = angular.copy(baseForm);
            };

            this.rmTodo = function (todo) {
                todo.$delete();
                $scope.todos.splice($scope.todos.indexOf(todo), 1);
            };

            this.toggleTodo = function (todo) {
                todo.$save();
            };
        })
        .directive('todoList', function () {
            return {
                templateUrl: 'templates/todoList.html',
                replace: true,
                transclude: false,
                restrict: 'EA',
                controllerAs: 'ctrl',
                controller: 'MainCtrl',
                link: function (scope, element, attrs, ctrl) {}
            };
        });
}(angular));
