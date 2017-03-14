(function(){
  'use strict';

  angular
    .module('TestingApp')
    .controller('UserController', UserController);

  function UserController(){
    this.firstname = 'PippO';
    this.lastname = 'PlutO';

    this.sayHello = sayHello;
    this.sayHelloString = sayHelloString;

    setTimeout(function(){
      this.firstname = 'Pluto';
    }.bind(this), 3000);

    function sayHello(){
      alert('Hello ' + this.firstname);
    }

    function sayHelloString(){
      return 'Hello ' + this.firstname;
    }
  }
})();