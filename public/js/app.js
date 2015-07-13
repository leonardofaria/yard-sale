(function(){

  var app = angular.module("yardSale", ["ngRoute", "pageslide-directive"]);

  app.config(function($routeProvider){
    $routeProvider
    .when("/products", {
      templateUrl: "products.html",
      controller: "ProductsController"
    })
    .when("/product/:id", {
      templateUrl: "product.html",
      controller: "ProductController"
    })
    .otherwise({redirectTo:"/products"});
  });

}());
//