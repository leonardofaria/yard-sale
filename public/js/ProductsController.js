(function() {

  var app = angular.module("yardSale");

  var ProductsController = function($scope, $location, $anchorScroll, $http) {

    $scope.filters = {};

    $scope.checked = false;
    $scope.toggle = function(){
      $scope.checked = !$scope.checked;
    };

    $http.get('data/data.json').success(function(data) {
      $scope.categories = data.categories;
      $scope.products = data.products;
    });

  };

  app.controller("ProductsController", ProductsController);

}());