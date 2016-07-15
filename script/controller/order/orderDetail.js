define(['service/config'], function(config) {
    return ['$rootScope', '$scope', '$http', '$state','$stateParams','buyerService', 
    function($rootScope, $scope, $http, $state,$stateParams,buyerService) {
        //面包屑
        var defaultCondition = {
            rows: 20,
            page: 1,
            searchType:2
        };


        $scope.oneAtATime = false;
	    $scope.status = {
	      isFirstOpen: true,
	      isFirstDisabled: false,
	      T_open:false
	    };

    }]
    
});