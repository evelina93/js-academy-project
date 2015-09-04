export default angular.module("casino", [
    require('./services/casino').name,
    require('./services/vendors').name,
    require('./services/categories').name,
    require('./directives/display-game').name,
    require('./directives/display-category').name,
]);