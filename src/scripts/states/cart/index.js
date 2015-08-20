export default angular.module('state.cart', [])
    .config(['$stateProvider', function ($stateProvider) {
        console.log('$stateProvider', $stateProvider);
        $stateProvider.state("cart", {
            url: '/cart',
            views: {
                menu: {
                    templateUrl: require('./cart-menu.html')
                },
                content: {
                    templateUrl: require('./cart.html')
                }
            }
        })
    }])