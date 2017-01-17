(function () {
  function ModalCtrl($uibModal) {
    this.createRoom = Modal.createRoom
  }
  
angular
  .module('blocChat')
  .controller('ModalCtrl', [ModalCtrl])
})();
