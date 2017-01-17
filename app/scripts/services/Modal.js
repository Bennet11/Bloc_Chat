(function () {
  function Modal($uibModal) {
    var createRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html'
        controller: function ($scope, $uibModalInstance) {
          $scope.cancel = function() {
            $uibModalInstance.dismiss('Cancel');
          };

          $scope.create = function() {
            $uibModalInstance.close();
          };
        },
        size: 'sm'
      });
    }
    return createRoom();
  }

  angular
    .module('blocChat')
    .factory('Modal', ['$uibModal', Modal]);
})();
