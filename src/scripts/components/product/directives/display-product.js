export default angular.module('product.directive.displayProduct', ['product.services.products'])
    .directive('displayProduct', ['cartService', function (cartService) {
        return {
            restrict: 'E',
            scope: {
                product: '='
            },
            templateUrl: require('../views/product.html'),
            link: function ($scope) {
                $scope.addToCart = function () {
                    console.log('addToCart clicked');
                    cartService.addProduct($scope.product.id);
                }
            }
        }
    }]);
