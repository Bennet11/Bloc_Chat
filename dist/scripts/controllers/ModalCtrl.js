(function () {
  function ModalCtrl($uibModal) {
    this.createRoom = function() {
      var modal = $uibModal.open({
        templateUrl: 'templates/modal.html',
        controllerAs: 'modalInstance',
        controller: function($uibModalInstance) {
          this.roomName = "";
            var addRoom = function(name) {
              Room.createRoom()
              console.log(name);
            };

          this.ok = function(){
            $uibModalInstance.close(this.roomName);
          };

          this.cancel = function() {
            $uibModalInstance.dismiss('cancel')
          };
        },
        size: 'sm'
      });
      modal.result.then(function (name) {
        firebase.database().ref().child("rooms").push({ "name": name })
      });
    }
  }

angular
  .module('blocChat')
  .controller('ModalCtrl', ['$uibModal', ModalCtrl])
})();
