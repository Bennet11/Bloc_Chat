(function () {
  function ModalCtrl($modal) {
    this.createRoom = function () {
      $modal.open({
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/modal.html'
      });
    }
  }

angular
  .module('blocChat')
  .controller('ModalCtrl', [ModalCtrl])
})();
