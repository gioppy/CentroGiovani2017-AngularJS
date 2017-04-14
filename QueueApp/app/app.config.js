(function(){
  'use strict';

  angular
    .module('QueueApp')
    .config(Config);

  Config.$inject = ['$routeProvider'];

  function Config($routeProvider){
    $routeProvider
      .when('/', {
        template: '<app-dispenser></app-dispenser>'
      })
      .when('/admin', {})
      .when('/box-office/:id', {})
      .when('/display', {})
      .when('/404', {})
      .otherwise({
        redirectTo: '/404'
      });
  }
})();