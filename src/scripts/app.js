/* ---------------------------------------------PRODUCT---------------------------------------------*/

/*-----------------------------------------------------------------------------------------------*/
require("../../bower_components/angular-ui-router/release/angular-ui-router")

var app = angular.module('cartApp', [
    require('./components').name,
    require('./states').name
]).config(function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/404');
}).run(function ($state, $rootScope) {
    $state.go('404');
    $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams) {
            alert('failed to get poroduct list')
           console.log('$stateChangeError', event, toState, toParams, fromState, fromParams)
        })
});


/*-------------------------------------------SERVICES-------------------------------------------*/


app.factory('cartService', function () {
    var prodList = JSON.parse(localStorage.getItem('prodList')) || {};
    return {
        addProduct: function (id) {
            prodList[id] = ++prodList[id] || 1;
            localStorage.setItem('prodList', JSON.stringify(prodList));
        },
        getNumberOfProducts: function () {
            var number = 0;
            for (var i in prodList) {
                number += prodList[i];
            }
            return number;
        },
        getProducts: function () {

        }
    }
});


/*-------------------------------------------CONTROLLERS-------------------------------------------*/


//app.controller('CartController', ['$scope', 'cartService',
//    function ($scope, cartService) {
//        product
//    }
//])


/*-------------------------------------------DIRECTIVES-------------------------------------------*/


app.directive('displayNumberOfProductsFromCart', ['cartService', function (cartService) {
    return {
        restrict: 'E',
        scope: {},
        template: "<span> {{cartService.getNumberOfProducts()}}<span>",
        link: function ($scope) {
            $scope.cartService = cartService;
        }
    }
}])
