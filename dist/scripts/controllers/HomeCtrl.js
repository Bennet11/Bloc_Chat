(function() {
  function HomeCtrl(Room, Modal) {
    this.chatRooms = Room.all;
    this.getRooms = Room.addRoom;
    this.newRoom = Modal.createRoom;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Modal', HomeCtrl]);
})();
