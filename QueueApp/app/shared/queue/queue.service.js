(function(){
  'use strict';

  angular
    .module('QueueApp')
    .service('QueueService', QueueService);

  function QueueService(){
    var data = [
      {
        id: 1,
        boxOffice: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        queueLength: 99,
        dispensedItems: 10,
        currentItem: 3
      },
      {
        id: 2,
        boxOffice: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        queueLength: 50,
        dispensedItems: 0,
        currentItem: 0
      },
      {
        id: 3,
        boxOffice: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        queueLength: 99,
        dispensedItems: 67,
        currentItem: 17
      }
    ];

    this.getQueues = getQueues;
    this.incrementDispensedItems = incrementDispensedItems;

    function getQueues(){
      return data;
    }

    function incrementDispensedItems(id){
      for(var i = 0; i < data.length; i++){
        if(data[i].id === id){
          var element = data[i];
          data[i].dispensedItems = element.dispensedItems < element.queueLength ? ++data[i].dispensedItems : 0;
          /*if(element.dispensedItems < element.queueLength){
            data[i].dispensedItems++;
          }else{
            data[i].dispensedItems = 0;
          }*/
        }
      }
    }
  }
})();