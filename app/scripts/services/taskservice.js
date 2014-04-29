'use strict';

angular.module('teste1App')
.service('Taskservice', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.Tasks = function()
    {
    	return $http.get('/tasks/').then(function(response) {
            return response || null;
        }, function(response) {
            switch(response.status)
            {
                default:
                throw 'nenhuma informação';
            }
        });
    };

    this.Add = function(name)
    {
    	return $http.post('/tasks/add', {name: name, done: false}).then(function(response) {
            return response || null;
        }, function(response) {
            switch(response.status)
            {
                default:
                throw 'nenhuma informação';
            }
        });
    };

    this.Done = function(task, done)
    {
    	task.done = done;
    	return $http.post('/tasks/update', task).then(function(response) {
            return response || null;
        }, function(response) {
            switch(response.status)
            {
                default:
                throw 'nenhuma informação';
            }
        });
    };
    
    this.Remove = function(task)
    {
    	return $http.delete('/tasks/' + task.id).then(function(response) {
            return response || null;
        }, function(response) {
            switch(response.status)
            {
                default:
                throw 'nenhuma informação';
            }
        });
    };
    
});

