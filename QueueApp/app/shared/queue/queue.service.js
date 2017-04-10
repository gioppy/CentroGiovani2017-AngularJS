(function(){
  'use strict';

  angular
    .module('QueueApp')
    .service('QueueService', QueueService);

  function QueueService(){
    var data = [
      {
        boxOffice: 1,
        description: 'Box office 1',
        queueLength: 99,
        dispensedItems: 10,
        currentItem: 3
      },
      {
        boxOffice: 2,
        description: 'Box office 2',
        queueLength: 50,
        dispensedItems: 0,
        currentItem: 0
      },
      {
        boxOffice: 4,
        description: 'Box office 4',
        queueLength: 99,
        dispensedItems: 67,
        currentItem: 17
      }
    ];

    this.getQueues = getQueues;

    function getQueues(){
      return data;
    }
  }
})();