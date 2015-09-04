export default angular.module('state.casino', [
    require('./category').name
])
    .config(['$stateProvider', function ($stateProvider, casinoService) {
        $stateProvider.state("casino", {
            url: '/casino',
            abstract:true,
            params: {
                category: {
                    value: "all"
                }
            },
            views: {
                header: {
                    templateUrl: require('../partials/header.html')
                },
                content: {
                    templateUrl: require('./casino.html'),
                    controller: function ($scope, casinoCategoriesService) {
                        casinoCategoriesService.getCategories().then(function (response) {
                            $scope.categories = response.categories;
                            $scope.$apply();
                        });
                    }
                },
                footer: {
                    templateUrl: require('../partials/footer.html')
                }
            }
        })
    }])