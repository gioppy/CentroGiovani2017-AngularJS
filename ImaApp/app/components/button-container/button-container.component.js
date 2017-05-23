(function(){
  'use strict';

  angular.module('ImaApp')
    .component('imaButtonContainer', {
      templateUrl: 'app/components/button-container/button-container.tpl.html',
      controller: ImaButtonContainerController
    });

  ImaButtonContainerController.$inject = ['ImaService'];

  function ImaButtonContainerController(ImaService) {
    this.onClickFromSmartphone = onClickFromSmartphone;
    this.onClickFromLive = onClickFromLive;

    function onClickFromSmartphone() {
      console.info('From outside', 'Smartphone');
      ImaService.save('Testing saving data');
    }

    function onClickFromLive() {
      console.info('From outside', 'Live');
    }
  }
})();