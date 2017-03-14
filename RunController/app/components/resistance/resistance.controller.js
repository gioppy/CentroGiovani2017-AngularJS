(function(){
  'use strict';

  angular
    .module('TestingApp')
    .controller('ResistanceController', ResistanceController);

    function ResistanceController(){
      var resistenza = '520';

      var addendo1 = resistenza[0];
      var addendo2 = resistenza[1];

      var moltiplicatore = (resistenza.length - 2 );

      var  colori =[
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey'
      ];

      this.output = [
        colori[addendo1],
        colori[addendo2],
        colori[moltiplicatore]
      ];
    }
})();