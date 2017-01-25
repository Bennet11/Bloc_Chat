(function() {
  function HomeCtrl(Room, Message, $cookies) {
    this.rooms = Room.all;
    this.activeRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');

    this.setCurrentRoom = function(room) {
      this.activeRoom = room;
      this.roomName = room.name;
      this.messages = Message.getByRoomId(this.activeRoom.$id);
    }

    this.sendMessage = function () {
      this.newMessage.roomId = this.activeRoom.$id;
      this.newMessage.user = this.currentUser;
      Message.send(this.newMessage)
    }
 	}

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
