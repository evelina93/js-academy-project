export default angular.module('state.about', [
    require('./sports').name
])
    .config(['$stateProvider', function ($stateProvider) {
        console.log('$stateProvider', $stateProvider);
        $stateProvider.state("about", {
            url: '/about',
            views: {
                menu: {
                    templateUrl: require('../partials/default-menu.html')
                },
                content: {
                    template: `
                    <ul>
                        <li><a ui-sref="about.sport">Sport</a></li>
                        <li></li>
                    </ul>
                    <div ui-view="aboutContent">

                    </div>

                    `
                }
            }
        })
    }])