(function() {
  function RoomCtrl(Room) {
    this.chatRooms = Room.rooms
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', RoomCtrl]);
})();
