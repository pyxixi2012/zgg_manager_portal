/**
 * Created by Administrator on 2016-07-11.
 */
define(['service/config'], function(config) {
    return ['$rootScope', '$scope', '$http', '$state','$stateParams','buyerService', function($rootScope, $scope, $http, $state,$stateParams,buyerService) {
        //面包屑
        var defaultCondition = {
            rows: 20,
            page: 1,
            searchType:2
        };
        
    }]
});