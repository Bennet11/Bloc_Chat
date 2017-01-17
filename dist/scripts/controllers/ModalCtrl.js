(function () {
  function ModalCtrl($uibModal) {
    this.createRoom = function () {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html'
        controller: function ($scope, Modal) {
          $scope.cancel = function() {
            Modal.dismiss('Cancel');
          };

          $scope.create = function() {
            Modal.close();
          };
        },
        size: 'sm'
      });
    }
  }

angular
  .module('blocChat')
  .controller('ModalCtrl', [ModalCtrl])
})();
