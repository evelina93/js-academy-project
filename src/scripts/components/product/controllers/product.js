export default angular.module('product.controller.product', ['product.directive.displayProduct'])
    .controller('ProductsListController', ['$scope', 'productService',
        function ($scope, productService) {
            productService.getProducts().then(function (data) {
                $scope.products = data;
            })
        }
    ]);