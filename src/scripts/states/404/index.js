export default angular.module('state.404', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("404", {
            url: '/404',
            views:{
                menu:{
                    templateUrl: require('../partials/default-menu.html')
                },
                content: {
                    templateUrl: require('./404.html')
                }
            }
        });

    }])
