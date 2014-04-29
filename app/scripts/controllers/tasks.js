'use strict';

angular.module('teste1App')
.controller('TasksCtrl', function ($scope, Taskservice) {
	$scope.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];

	$scope.TaskName = '';
	$scope.Tasks = [];

	$scope.AddTask = function(){
		Taskservice.Add($scope.TaskName).then(function (newTask) {
			$scope.Tasks.push(newTask);
			$scope.TaskName = '';
		}, function (error){
			window.alert(error);            
		});
	};

	$scope.DoneTask = function(task){
		Taskservice.Done(task,!task.done).then(function (newTask) {
			$scope.Tasks[$scope.Tasks.indexOf(task)] = newTask;
		}, function (error){
			window.alert(error);            
		});
	};

});
