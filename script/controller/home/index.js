/**
 * Created by Administrator on 2016-07-11.
 */
define(['service/config'], function(config) {
    return ['$rootScope', '$scope', '$http', '$state', function($rootScope, $scope, $http, $state) {
        //面包屑
        $scope.test = function () {
            console.log($scope.appTitle);
            $scope.appname = "cs";
        }
        config.buyer_domain
        $rootScope.crumbs = [];
    }]
});
