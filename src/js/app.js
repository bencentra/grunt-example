var app = angular.module('todo', []); 

app.controller('TodoCtrl', ['$scope', function($scope) {

	var baseTodo = {
		title: "",
		completed: false
	};

	$scope.newTodo = baseTodo;

	$scope.todos = [
		{title: "Set up demo app", completed: true},
		{title: "Learn about Grunt", completed: false},
		{title: "Be awesome", completed: false}
	];

	$scope.addTodo = function() {
		$scope.todos.push($scope.newTodo);
		$scope.newTodo = baseTodo;
	};

}]);