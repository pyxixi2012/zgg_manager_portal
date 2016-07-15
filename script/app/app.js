/**
 * Created by Administrator on 2016-07-09.
 */
define(['angular','ui-router','lazy-load','controller/main', 'module/common',  'components/ui-bootstrap-tpls'],function (angular,uiRouter,lazyLoad, mainCtr,commonModule,uiBootstraptpls) {
    var app = angular.module('mgr', ['ui.router','mgr.bootstrap','ui.bootstrap'], function($controllerProvider, $provide, $compileProvider, $filterProvider) {
        lazyLoad.init(arguments);
    });
    //启动应用程序
    app.run(['$rootScope', '$location', '$state', '$timeout', function($rootScope, $location, $state, $timeout) {


    }]);
    app.config(['$httpProvider','$locationProvider',function ($httpProvider,$locationProvider) {
        //跨域请求配置
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push('httpInterceptor');
        //$locationProvider.html5Mode(true);
    }])

    app.factory('httpInterceptor', [ '$q', '$injector',function($q, $injector) {
        var httpInterceptor = {
            'responseError' : function(response) {
                if (response.status == 401) {
                    var rootScope = $injector.get('$rootScope');
                    var state = $injector.get('$rootScope').$state.current.name;
                    rootScope.stateBeforLogin = state;
                    rootScope.$state.go("login");
                    return $q.reject(response);
                } else if (response.status === 404) {
                    alert("404!");
                    return $q.reject(response);
                }
            },
            'response' : function(response) {
                return response;
            }
        }
        return httpInterceptor;
    }
    ]);
    app.controller('mainCtrl', mainCtr);
    return app;
})
 