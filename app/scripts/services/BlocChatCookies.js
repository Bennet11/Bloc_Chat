(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: 'templates/user.html',
        controllerAs: 'usermodalInstance',
        controller: function($uibModalInstance) {
          this.addUser = function(user) {
            $cookies.put('blocChatCurrentUser', user)
            $uibModalInstance.close();
            }
          },
          size: 'md'
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
