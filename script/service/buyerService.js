define(['service/config'], function(config) {
    return ['buyerService', ['$http', '$q', function($http, $q) {
        var serverErrorData = {
            status: 500,
            msg: '服务器连接失败，请检查服务是否可用或联系管理员！'
        };
        return {
            /**
             * 用户列表
             * zhengqiang.liu
             * @constructor
             * */
            getUsreList: function(condition) {
                console.log(JSON.stringify(condition));
                    var defer = $q.defer();
                $http.get('http://101.200.142.161:8888/member/getMemberList?page=1&rows=10&searchType=2').success(function(data,status,headers,congfig){
                        //console.log(status);
                        //console.log(headers);
                        //console.log(congfig);
                        defer.resolve(data);
                    }).error(function(data,status,headers,congfig){
                        defer.reject(data);
                    });
                    return defer.promise
            },
            /**
             * 用户列表
             * zhengqiang.liu
             * @constructor
             * */
            getUserDetaile: function(condition) {
                console.log(JSON.stringify(condition));
                var defer = $q.defer();
                $http.get('http://101.200.142.161:8888/member/getMemberList?page=1&rows=10&searchType=2').success(function(data,status,headers,congfig){
                    //console.log(status);
                    //console.log(headers);
                    //console.log(congfig);
                    defer.resolve(data);
                }).error(function(data,status,headers,congfig){
                    defer.reject(data);
                });
                return defer.promise
            }
        };
    }]]
});
