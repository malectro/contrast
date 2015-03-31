'use strict';

class CreateCtrl {
  constructor ($scope) {
    var self = this;

    this.reset($scope);

    $scope.submit = function () {
      self.submit($scope);
    };
  }

  submit ($scope) {
    if (!$scope.url) {
      $scope.urlClass = 'error';
    } else {

      $scope.mainCtrl.create({
        url: $scope.url,
        title: $scope.title || $scope.url,
      });

      this.reset($scope);
      $scope.mainCtrl.reset($scope);
    }
  }

  reset ($scope) {
    $scope.url = '';
    $scope.title = '';
    $scope.urlClass = '';
  }
}

CreateCtrl.$inject = ['$scope'];

export default CreateCtrl;

