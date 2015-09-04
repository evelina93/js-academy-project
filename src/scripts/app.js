/* ---------------------------------------------PRODUCT---------------------------------------------*/

/*-----------------------------------------------------------------------------------------------*/
require("../../bower_components/angular-ui-router/release/angular-ui-router")

var app = angular.module('emJsAcademy', [
    require('./components').name,
    require('./states').name
]).config(function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/404');
}).run(function ($state, $rootScope, emWebApi) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        console.error('$stateChangeError', event, toState, toParams, fromState, fromParams)
    });


});
window.global = {};