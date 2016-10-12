// MAIN CONTROLLER
function mainController($scope) {


  $scope.contacts = [];

  $scope.add = function() {

      $scope.contacts.push($scope.contact)
      $scope.contact = {}
  }
}
