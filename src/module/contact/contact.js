angular.module('contact', [])

.controller('ContactCtrl', function($scope, $mdDialog){
  $scope.submit = function() {

    $mdDialog.show(
      $mdDialog.alert()
      .parent(angular.element(document.querySelector('#popupContainer')))
      .clickOutsideToClose(true)
      .title('Great !')
      .textContent('Thank you ' + $scope.user.name)
      .ok('Got it!')
    );
    $scope.user.name = "";
    $scope.user.email = "";
    $scope.user.phone = "";
  };

});
