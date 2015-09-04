export default angular.module('casino.services.vendors', [])
    .factory('casinoVendorsService', ['emWebApi', function (emWebApi) {
        return {
            getVendors: function () {
                return emWebApi.call('/casino#getGameVendors');
            }
        }
    }])