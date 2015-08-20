export default angular.module('state.home', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("home", {
            url: '/',
            resolve: {
                productList: function (productService) {
                    return productService.getProducts()
                }
            },
            views: {
                menu: {
                    templateUrl: require('./home-menu.html')
                },
                content: {
                    templateUrl: require('./home.html'),
                    controller: function ($scope, productList) {
                        $scope.products = productList;
                    }
                }
            }
        })
    }])