(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;

    return {
      getByRoomId: function (roomId) {
        console.log(roomId)
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      },
      send: function(newMessage) {
        messages.$add(newMessage);
      }
    };
    return messages
  }

angular
  .module('blocChat')
  .factory('Message', ['$firebaseArray', Message])
})();
