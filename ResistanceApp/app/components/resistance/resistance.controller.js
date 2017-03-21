(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .controller('ResistanceController', ResistanceController);

    ResistanceController.$inject = ['ColorsFactory', 'ColorsService'];

    function ResistanceController(ColorsFactory, ColorsService){
      //var colori = ColorsFactory.getColors();
      var colori = ColorsService.getColors();

      this.calcolaResistenza = calcolaResistenza;

      function calcolaResistenza(){
        var addendo1 = this.resistenza[0];
        var addendo2 = this.resistenza[1];

        var moltiplicatore = (this.resistenza.length - 2 );

        this.output = [
          colori[addendo1],
          colori[addendo2],
          colori[moltiplicatore]
        ];
      }
    }
})();