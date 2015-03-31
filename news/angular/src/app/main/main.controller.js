'use strict';

class MainCtrl {
  constructor ($scope) {
    this.items = localStorage.news ? JSON.parse(localStorage.news) : {};

    this.reset($scope);

    // yeoman code
    $scope.awesomeThings = [];
    // end yeoman code
  }

  create (attrs) {
    attrs.id = this.id();
    this.items[attrs.id] = angular.extend({}, attrs);
    localStorage.news = JSON.stringify(this.items);
  }

  reset ($scope) {
    $scope.items = angular.extend(this.items);
  }
}

MainCtrl.prototype.id = (function () {
  var id = parseInt(localStorage.id, 10) || 0;
  return function () {
    id++;
    localStorage.id = id;
    return id;
  };
}());

MainCtrl.$inject = ['$scope'];

export default MainCtrl;
