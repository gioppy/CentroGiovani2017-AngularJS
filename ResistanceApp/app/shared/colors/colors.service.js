(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .service('ColorsService', ColorsService);

  function ColorsService(){
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

    this.getColors = getColors;

    function getColors(){
      return colori;
    }
  }
})();