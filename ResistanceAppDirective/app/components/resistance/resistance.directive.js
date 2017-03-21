(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .directive('resistance', ResistanceDirective);

  ResistanceDirectiveController.$inject = ['ColorsService'];

  function ResistanceDirectiveController(ColorsService){
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

  function ResistanceDirective(){
    return {
      restrict: 'EA',
      templateUrl: 'app/components/resistance/resistance.tpl.html',
      controller: ResistanceDirectiveController,
      controllerAs: 'ctrl',
      scope: {}
    };
  }
})();