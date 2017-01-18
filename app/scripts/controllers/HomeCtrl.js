(function() {
  function HomeCtrl(Room, $uibModal, $scope) {
    $scope.allRooms = Room.all;
    $scope.open = function() {

      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl'
      });

      modalInstance.result.then(function (newName) {
        Room.createRoom(newName);
      })
    }
 	}

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();
