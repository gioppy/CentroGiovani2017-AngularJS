(function(){
  'use strict';

  angular.module('ImaApp')
    .service('ImaService', ImaService);

  function ImaService() {
    this.save = save;
    this.get = get;

    function save(message) {
      var date = getDate();
      var previousData = this.get();

      var savedData = previousData ? previousData : [];

      savedData.push({
        message: message,
        time: formatTime(date),
        date: formatDate(date)
      });

      localStorage.setItem('ImaTest', JSON.stringify(savedData));
    }

    function get() {
      var data = localStorage.getItem('ImaTest');
      return JSON.parse(data);
    }

    function getDate() {
      return new Date();
    }

    function formatTime(date) {
      return date.getHours() + ':' + date.getMinutes();
    }

    function formatDate(date) {
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }
  }
})();