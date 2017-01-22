(function() {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");
    var messagesRef = firebase.database().ref().child("messages").orderByChild('roomId')
    var messages = $firebaseArray(ref);

    Message.all = messages;

    return {
      getByRoomId: function (roomId) {
        return $firebaseArray(messagesRef.equalTo(roomId))
      }
    };
  }

angular
  .module('blocChat')
  .factory('Message', ['$firebaseArray', Message])
})();
