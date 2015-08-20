export default angular.module('states', [
    'ui.router',
    require('./home').name,
    require('./404').name,
    require('./cart').name,
    require('./about').name
])
