(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      this.createUser = function () {
        var usermodal = $uibModal.open({
          templateUrl: 'templates/user.html',
          controllerAs: 'usermodalInstance',
          controller: function($uibModalInstance) {
            this.addUser = function() {
              $cookies.put('blocChatCurrentUser', this.user)
              $uibModalInstance.close();
            }
          }
          size: 'md'
        });
      }
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]]);
}());
