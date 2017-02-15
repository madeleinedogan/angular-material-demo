angular.module('AngularMaterialDemoApp',  ['ngMaterial', 'router', 'contact', 'home'])

.controller('AngularMaterialDemoAppCtrl', function($scope){
  $scope.currentNavItem = 'home';
});
