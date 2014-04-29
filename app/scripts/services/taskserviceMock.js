'use strict';

angular.module('teste1AppMock',['teste1App','ngMockE2E'])
.run(function($httpBackend) {


	var newGuid = function () {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
	};


	$httpBackend.whenGET('/tasks/').respond([{
		id: newGuid(),
		name: 'Tarefa 1',
		done: false
	},{
		id: newGuid(),
		name: 'Tarefa 2',
		done: true
	}]);

	$httpBackend.whenPOST('/tasks/add').respond(function(method, url, data){
		console.log(data);
		if(data.name === '' || data.name === null)
		{
			throw 'name is null';
		}

		data.id =  newGuid();
		return [200, data];
	});

	$httpBackend.whenPOST('/tasks/update').respond(function(method, url, data){
		return [200, data];
	});

	$httpBackend.whenGET(/views/).passThrough();

});