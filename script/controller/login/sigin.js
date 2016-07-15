define([ 'service/config','app'], function(config,app) {
    return['$rootScope', '$scope','$state','$stateParams', function ($rootScope,$scope,$state,$stateParams) {
        $scope.login = function () {
            $state.go("app.home");
        }
    }]
});
