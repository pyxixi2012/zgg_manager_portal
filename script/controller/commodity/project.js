/**
 * Created by Administrator on 2016-07-11.
 */
define(['service/config'], function(config) {
    return ['$rootScope', '$scope', '$http', '$state','$stateParams','buyerService','$modal' ,function($rootScope, $scope, $http, $state,$stateParams,buyerService,$modal) {
        //面包屑
        var defaultCondition = {
            rows: 20,
            page: 1,
            searchType:2
        };


        $scope.openModel = function (size) {
            var modalInstance = $modal.open({
                templateUrl: "view/commodity/projectinfo.html",
                controller: function($scope, $modalInstance){
                    /*  $scope.files = JSON.parse(files);*/
                    $scope.ok = function () {
                        $modalInstance.dismiss();
                        return false;
                    };
                    $scope.cancel = function () {
                        $modalInstance.dismiss();
                        return false;
                    };
                },
                size:size
            });
        }

    }]
});



