(function() {
  function RoomCtrl(Room) {
    this.all = Room.rooms
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
