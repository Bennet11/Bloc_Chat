(function() {
  function HomeCtrl(Room, $scope, Message) {
    $scope.rooms = Room.all;
    $scope.activeRoom = null;

    $scope.setCurrentRoom = function(room) {
      $scope.activeRoom = room;
      $scope.roomName = room.name;
      $scope.messages = Message.getByRoomId(this.activeRoom.$id);
    }
 	}

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', 'Message', HomeCtrl]);
})();
