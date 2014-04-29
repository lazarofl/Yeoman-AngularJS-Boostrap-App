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

	$scope.LoadTasks = function(){
		Taskservice.Tasks().then(function (response) {
			$scope.Tasks = response.data;
		}, function (error){
			window.alert(error);            
		});
	};

	$scope.AddTask = function(){
		Taskservice.Add($scope.TaskName).then(function (response) {
			$scope.Tasks.push(response.data);
			$scope.TaskName = '';
		}, function (error){
			window.alert(error);            
		});
	};

	$scope.DoneTask = function(task){
		Taskservice.Done(task,!task.done).then(function (response) {
			$scope.Tasks[$scope.Tasks.indexOf(task)] = response.data;
		}, function (error){
			window.alert(error);            
		});
	};

	$scope.LoadTasks();
});
