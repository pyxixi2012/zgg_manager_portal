/**
 * Created by Administrator on 2016-07-11.
 */
define(['service/config'], function(config) {
    return ['$rootScope', '$scope', '$http', '$state','$stateParams','buyerService','$modal', function($rootScope, $scope, $http, $state,$stateParams,buyerService,$modal) {
        //面包屑
        var defaultCondition = {
            rows: 20,
            page: 1,
            searchType:2
        };
        $scope.listVM = $stateParams.listVM || {
                condition: angular.copy(defaultCondition),
                paginate: {
                    rows:20,
                    page: 1,
                    pagesCount: 0,
                    totalItemsCount: 0,
                    searchType:2
                },
                items: [],
                loading:false
            };

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };
        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };
        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.open2 = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened2 = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            class: 'datepicker',
            showWeeks: false
        };

        $scope.initDate = new Date('2016-15-20');
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[1];
        /**
         * addUserModal
         * **/
        $scope.openAddUserModal = function (size) {
            var modalInstance = $modal.open({
                templateUrl: "view/user/userinfo.html",
                controller: function($scope, $modalInstance){
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
        $scope.openAddWorkSheetModal =function (size) {
            var modalInstance = $modal.open({
                templateUrl: "view/user/worksheet.html",
                controller: function($scope, $modalInstance){
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





        $scope.userList = function () {
            buyerService.getUsreList($scope.listVM.condition).then(
                function(data) {
                    if (data.status == '200') {
                        $scope.listVM.items = data.rows;
                        $scope.listVM.paginate = data.total;
                    } else {
                        console.log('error', '加载列表失败，原因：' + data.msg);
                    }
                },
                function(errResponse) {
                    $scope.view.loading = false;
                    console.error('Error while search productWarehouse.');
                }
            );
        }
        $scope.userList();
    }]
});