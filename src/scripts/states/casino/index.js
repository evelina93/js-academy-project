export default angular.module('state.casino', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("casino", {
            url: '/casino',
            views: {
                header: {
                    templateUrl: require('../partials/header.html')
                },
                content: {
                    templateUrl: require('./casino.html'),
                    controller: function(){
                        console.log('casino loaded')
                    }
                },
                footer: {
                    templateUrl: require('../partials/footer.html')
                }
            }
        })
    }])