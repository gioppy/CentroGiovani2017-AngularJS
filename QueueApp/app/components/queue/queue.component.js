(function(){
  'use strict';

  angular
    .module('QueueApp')
    .component('appQueue', {
      templateUrl: 'app/components/queue/queue.tpl.html',
      bindings: {
        data: '<',
        onTicket: '&'
      },
      controller: QueueController
    });

  function QueueController(){
    this.handleGetTicket = handleGetTicket;

    function handleGetTicket(id){
      console.log('GET TICKET');
      this.onTicket({$id: id});
    }
  }
})();