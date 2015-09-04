export default angular.module('casino.directive.displayCategory',[])
    .directive('displayCategory',[function(){
        return {
            restrict: 'E',
            scope: {
                category: '='
            },
            templateUrl: "scripts/components/casino/views/category.html"
        }
    }])