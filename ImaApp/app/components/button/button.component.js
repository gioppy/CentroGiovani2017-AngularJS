(function(){
  'use strict';

  angular.module('ImaApp')
    .component('imaButton', {
      template: '<button ng-click="$ctrl.handleClick()" ng-disabled="$ctrl.isDisabled">{{ $ctrl.label }}</button>',
      bindings: {
        label: '<',
        onPalindromo: '&'
      },
      controller: ImaButtonController
    });

  ImaButtonController.$inject = ['$timeout'];

  function ImaButtonController($timeout) {
    this.handleClick = handleClick;

    this.onInit = function() {
      this.isDisabled = false;
    };

    function handleClick() {
      console.log('INSIDE BUTTON', this.label);
      this.onPalindromo();
      this.isDisabled = true;
      $timeout(function(){
        this.isDisabled = false;
      }.bind(this), 60000);
    }
  }
})();