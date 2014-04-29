'use strict';

describe('Controller: TasksCtrl', function () {

  // load the controller's module
  beforeEach(module('teste1App'));

  var TasksCtrl,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TasksCtrl = $controller('TasksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('lista de tarefas deve estar vazia', function () {
    expect(scope.Tasks.length).toBe(0);
  });
  
});
