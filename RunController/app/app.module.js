(function(){
  'use strict';

  angular
    .module('TestApp', [])
    .run(Run);

  Run.$inject = ['$rootScope'];

  function Run($rootScope){
    $rootScope.firstName = 'Root';
    $rootScope.lastName = 'Scope';
    $rootScope.sayHi = sayHi;

    function sayHi(){
      alert('Hi!');
    }
  }
})();