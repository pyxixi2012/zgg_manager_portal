/**
 * Created by Administrator on 2016-07-11.
 */
require.config({
    paths: {
        'angular': 'library/angular/angular.min',
        'ui-router': 'library/angular/angular-ui-router',
        'jquery': 'library/jquery/jquery-1.11.3.min',
        'text': 'library/requirejs/text-2.0.12',
        'app': 'script/app/app',
        'router': 'script/app/router',
        'lazy-load': 'script/common/router-lazy-load',
        'service': 'script/service',
        'controller': 'script/controller',
        'module': 'script/module',
        'components': 'library/components',
        'zh-cn': 'library/angular/i18n/angular-locale_zh-cn'
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        }, 
        'ui-router': {
            deps: ['angular']
        },
        'module/common': {
            deps: ['angular']
        },
        'components/ui-bootstrap-tpls': {
            deps: ['angular']
        },
        'components/bootstrap.min': {
            deps: ['jquery']
        },
        'zh-cn':{
            deps: ['angular']
        }
    },
    //urlArgs: "ts=" + (new Date()).getTime()
});
requirejs(['angular', 'jquery', 'app', 'router','zh-cn'], function (angular, $) {
    //启动后台angular服务并依赖app里面的module
    $(function () {
          angular.bootstrap(document,['mgr']);
    })
})