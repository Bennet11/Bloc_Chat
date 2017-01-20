(function() {
  function HomeCtrl(Room, $scope) {
    $scope.allRooms = Room.all;
    $scope.activeRoom = null;

    $scope.setRoom = function(room) {
      $scope.activeRoom = room;
      $scope.roomName = room.name;
      $scope.messages = Room.getByRoomId(room.$id);
    }
 	}

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
