(function() {
  function HomeCtrl(Room, Create) {
    this.chatRooms = Room.all;
    this.getRooms = Room.addRoom;
    this.newRoom = Create;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Modal', HomeCtrl]);
})();
