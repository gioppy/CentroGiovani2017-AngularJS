(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .factory('ColorsFactory', ColorsFactory);

  function ColorsFactory(){
    var colori =[
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'tomato'
    ];

    var service = {
      getColors: getColors
    };

    function getColors(){
      return colori;
    }

    return service;
  }
})();