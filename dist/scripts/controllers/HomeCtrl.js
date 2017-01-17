(function() {
  function HomeCtrl(Room) {
    this.chatRooms = Room.all;
    this.getRooms = Room.addRoom;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
