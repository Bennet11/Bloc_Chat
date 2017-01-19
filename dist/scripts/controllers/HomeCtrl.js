(function() {
  function HomeCtrl(Room, $uibModal, $scope, Message) {
    $scope.allRooms = Room.all;
    $scope.activeRoom = null;

    $scope.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl'
      });

      modalInstance.result.then(function (newName) {
        Room.createRoom(newName);
      })
    }

    $scope.setRoom = function(room) {
      $scope.activeRoom = room;
      $scope.roomName = room.name;
      $scope.messages = Room.getByRoomId(room.$id);
    }
 	}

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', '$scope', 'Message', HomeCtrl]);
})();
