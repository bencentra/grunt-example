describe("TodoCtrl", function() {

	beforeEach(module("todo"));

	var scope, ctrl;

  describe("$scope.addTodo()", function() {
  	var newTodo;

  	beforeEach(inject(function($rootScope, $controller){ 
			scope = $rootScope.$new();
	    ctrl = $controller('TodoCtrl', { $scope: scope });
	    newTodo = { title: "This is a to-do item", completed: false };
	  }));

    it("should add a todo to $scope.todos", function() {
    	var oldLength = scope.todos.length;
    	scope.newTodo = newTodo;
    	scope.$apply(function() {
    		scope.addTodo();
    	});
    	expect(scope.todos.length).toBeGreaterThan(oldLength);
    });

  });

});