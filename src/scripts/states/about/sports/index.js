export default angular.module('state.about.sport', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("about.sport", {
            url: '/sport',
            views:{
                "about@menu":{
                    templateUrl: require('./sport.html')

                },
                aboutContent: {
                    templateUrl: require('./sport.html')
                }
            }
        })
    }])