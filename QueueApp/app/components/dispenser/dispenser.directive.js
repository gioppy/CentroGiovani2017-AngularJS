(function(){
  'use strict';

  angular
    .module('QueueApp')
    .component('appDispenser', {
      templateUrl: 'app/components/dispenser/dispenser.tpl.html',
      controller: DispenserController
    });

  DispenserController.$inject = ['QueueService'];

  function DispenserController(QueueService){
    this.queues = QueueService.getQueues();
    this.onTicket = onTicket;

    function onTicket(id){
      QueueService.incrementDispensedItems(id);
    }
  }

  /*function AppDispenserDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/dispenser/dispenser.tpl.html'
    };
  }*/
})();