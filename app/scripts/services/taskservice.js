'use strict';

angular.module('teste1App')
.service('Taskservice', function Taskservice($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.Add = function(nome)
    {
    	var deferred = $q.defer();
    	try
    	{
    		if(nome === '') {
    			throw 'Nome não informado';
    		}

    		var data = 
    		{
    			name: nome,
    			done: false
    		};
    		deferred.resolve(data);
    	}
    	catch(error)
    	{
    		deferred.reject(error);
    	}

    	return deferred.promise;
    };


    this.Done = function(task, done)
    {
    	var deferred = $q.defer();
    	try
    	{
    		if(task === null || task === undefined) {
    			throw 'Nome não informado';
    		}
    		
    		task.done = done;

    		deferred.resolve(task);
    	}
    	catch(error)
    	{
    		deferred.reject(error);
    	}

    	return deferred.promise;
    };
    
});
