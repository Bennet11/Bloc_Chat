(function() {
  function HomeCtrl(Room, Message) {
    this.rooms = Room.all;
    this.activeRoom = null;

    this.setCurrentRoom = function(room) {
      this.activeRoom = room;
      this.roomName = room.name;
      this.messages = Message.getByRoomId(this.activeRoom.$id);
    }
 	}

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', 'Message', HomeCtrl]);
})();
