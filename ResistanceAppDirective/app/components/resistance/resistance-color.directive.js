(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .directive('resistanceColor', ResistanceColorDirective);

  function ResistanceColorDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/resistance/resistance-color.tpl.html',
      scope: {
        color: '<'
      },
      transclude: true
    };
  }
})();