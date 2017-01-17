(function () {
  function ModalCtrl($uibModal) {
    this.createRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: function ($scope, $uibModalInstance) {
          this.close = function() {
            $uibModalInstance.close();
          };

          this.create = function(roomName) {
           //call room service to add to room
           console.log('adding room')
            this.close();
          };
        },
        size: 'sm'
      });
    }
    return this.createRoom();
  }

angular
  .module('blocChat')
  .controller('ModalCtrl', ['$uibModal', ModalCtrl])
})();
