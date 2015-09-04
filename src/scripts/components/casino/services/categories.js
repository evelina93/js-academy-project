export default angular.module('casino.services.categories', [])
    .factory('casinoCategoriesService', ['emWebApi', function (emWebApi) {
        return {
            getCategories: function () {
                return emWebApi.call('/casino#getGameCategories');
            }
        }
    }])