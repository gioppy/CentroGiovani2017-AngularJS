(function(){
  'use strict';

  angular
    .module('TestApp')
    .controller('UserController', UserController);

  function UserController(){
    this.firstName = 'Pippo 1';
    this.lastName = 'Pluto 1';
    this.sayHi = sayHi;

    function sayHi(){
      alert('Hi, from controller!');
    }
  }
})();