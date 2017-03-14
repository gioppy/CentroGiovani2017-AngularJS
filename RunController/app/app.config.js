(function(){
  'use strict';

  angular
    .module('TestingApp')
    .run(Run);

  Run.$inject = ['$rootScope'];

  function Run($rootScope){
    $rootScope.firstname = 'Pippo';
    $rootScope.lastname = 'Pluto';

    $rootScope.sayHello = sayHello;
    $rootScope.sayHelloString = sayHelloString;

    function sayHello(){
      alert('Hello ' + $rootScope.firstname);
    }

    function sayHelloString(){
      return 'Hello ' + $rootScope.firstname;
    }
  }
})();