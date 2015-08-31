import  WebApi from './em-webapi/bundle.js';
export default angular.module("components", []).factory('emWebApi', function() {
    var webApi = EM.webApi.init({
        "url": "wss://api3.everymatrix.com/v2",
        "cometURL": "https://comet3.everymatrix.com",
        "realm": 'http://www.jetbull.com'
    });
    return webApi;

})