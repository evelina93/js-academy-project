export default angular.module('casino.directive.displayGame',[])
.directive('displayGame',[function(){
        return {
            restrict: 'E',
            scope: {
                game: '='
            },
            templateUrl: "scripts/components/casino/views/game.html"
        }
    }])