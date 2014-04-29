'use strict';

describe('Service: Taskservice', function () {

  // load the service's module
  beforeEach(module('teste1App'));

  // instantiate service
  var Taskservice;
  beforeEach(inject(function (_Taskservice_) {
    Taskservice = _Taskservice_;
  }));

  it('should do something', function () {
    expect(!!Taskservice).toBe(true);
  });

  it('ao adicionar uma tarefa de nome "Exemplo 1" ele retorna uma nova tarefa com o mesmo nome', function () {
    var TaskName = 'Exemplo 1';
    Taskservice.Add(TaskName).then(function (result){
      expect(result.name).toBe(TaskName);
    });
  });

  it('ao marcar uma tarefa aberta como done é retornado o objeto tarefa com o done = true', function () {
    var task = {
      name: 'Teste 1',
      done: false
    };

    Taskservice.Done(task).then(function (result){
      expect(result.done).toBe(true);
    });
  });


});
