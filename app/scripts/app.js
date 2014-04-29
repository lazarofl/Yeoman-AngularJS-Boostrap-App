'use strict';

angular
.module('teste1App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'teste1AppMock'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/About', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/Contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .when('/Tasks', {
    templateUrl: 'views/tasks.html',
    controller: 'TasksCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});