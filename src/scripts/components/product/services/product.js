import Product from './product.class.js';


export default angular.module('product.services.products', [])
    .factory('productService', ['$http','$q', '$timeout', function ($http, $q, $timeout) {
        return {
            getProducts: function () {

                //return $q.reject("server error");

                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: 'products.json'
                }).then(function (response) {
                    var prodList = response.data.map(function (item) {
                        return new Product(item.id, item.price, item.weight, item.name, item.tva, item.description, item.image);
                    });
                    $timeout(function () {
                        deferred.resolve(prodList);
                    }, 3000)
                });

                return deferred.promise;
            }
        }
    }]);