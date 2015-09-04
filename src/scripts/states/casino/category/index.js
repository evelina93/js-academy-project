export default angular.module('state.casino.category', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("casino.category", {
            url: '/{category}',
            resolve: {
                gameList: function (casinoService, $stateParams) {
                    var category = $stateParams.category;

                    var parameters =
                    {
                        expectedFields: casinoService.FIELDS.Name + casinoService.FIELDS.Thumbnail + casinoService.FIELDS.FPP + casinoService.FIELDS.Vendor + casinoService.FIELDS.Categories,
                        expectedFormat: 'array',
                        filterByCategory: (category && category != 'all') ? [category] : [],
                        pageIndex: 1,
                        pageSize: 5,
                    }

                    return casinoService.getGames(parameters).then(function (list) {
                        return list.games;
                    })
                }
            },
            views: {
                categoryContent: {
                    templateUrl: require('./category.html'),
                    controller: function ($scope, gameList, $stateParams, casinoService, casinoVendorsService) {

                        $scope.gameList = gameList;
                        $scope.showLoadMoreButton = $scope.gameList.length === 0 ? false : true;

                        var parameters =
                        {
                            expectedFields: casinoService.FIELDS.Name + casinoService.FIELDS.Thumbnail + casinoService.FIELDS.FPP + casinoService.FIELDS.Vendor + casinoService.FIELDS.Categories,
                            expectedFormat: 'array',
                            pageIndex: 1,
                            pageSize: 5,
                        }
                        parameters.pageIndex = 1;


                        casinoVendorsService.getVendors().then(function (list) {
                            $scope.vendors = list.vendors;
                            $scope.$apply();
                        });

                        $scope.changed = function (selectedMethod, selectedVendor, selectedGame) {
                            var category = $stateParams.category;
                            var vendor = $scope.selectedVendor = selectedVendor;
                            var method = $scope.selectedMethod = selectedMethod;
                            var name = $scope.selectedGame = selectedGame;


                            parameters.pageIndex = 1;
                            parameters.filterByName = name ? [name] : [];
                            parameters.filterByVendor = vendor ? [vendor] : [];
                            parameters.filterByCategory = (category && category != 'all') ? [category] : [];
                            if (method) {
                                var orderType = method == "FPP" ? 'DESC' : 'ASC';
                                parameters.sortFields = [
                                    {field: casinoService.FIELDS[method], order: orderType}
                                ];
                            }

                            casinoService.getGames(parameters).then(function (list) {
                                $scope.gameList = list.games;
                                $scope.$apply();

                                if ((list.totalGameCount === $scope.gameList.length) || ($scope.gameList.length === 0)) {
                                    $scope.showLoadMoreButton = false;
                                    $scope.$apply();

                                } else {
                                    $scope.showLoadMoreButton = true;
                                    $scope.$apply();

                                }

                            })
                        }

                        $scope.loadMore = function () {
                            parameters.pageIndex = ++parameters.pageIndex;

                            casinoService.getGames(parameters).then(function (list) {

                                $scope.gameList = $scope.gameList.concat(list.games);
                                $scope.$apply();

                                if ((list.totalGameCount === $scope.gameList.length) || ($scope.gameList.length === 0)) {
                                    $scope.showLoadMoreButton = false;
                                    $scope.$apply();

                                } else {
                                    $scope.showLoadMoreButton = true;
                                    $scope.$apply();

                                }


                            })
                        }


                    }
                }
            }
        })
    }])