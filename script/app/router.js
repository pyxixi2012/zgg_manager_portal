/**
 * Created by Administrator on 2016-07-11.
 */
define(['app','lazy-load'],function (app,lazyLoad){
    return app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$controllerProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider, $controllerProvider) {
            console.log(123123);
            $urlRouterProvider.when("", "app/home");
          /*  $stateProvider.state('home',{
                url:"/home",
                 templateUrl:'view/home/index.html',
                 controller:'controller/home/index',
            }) q q
*/          $stateProvider.state('access', {
                url: '/access',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            $stateProvider.state('access.signin', lazyLoad.config('/signin', 'view/login/signin.html', 'controller/login/sigin', {directives:[], services: [], filters:[] }));
            $stateProvider.state('app', lazyLoad.config('/app', 'view/app.html', 'controller/home/index', {directives:[], services: [], filters:[] }));
            $stateProvider.state('app.home', lazyLoad.config('/home', 'view/home/index.html', 'controller/home/index', {directives:[], services: [], filters:[] }));
            $stateProvider.state('app.userlist', lazyLoad.config('/userlist', 'view/user/list.html', 'controller/user/list', {directives:[], services: ['service/buyerService'], filters:[] }));
            $stateProvider.state('app.orderList', lazyLoad.config('/orderList', 'view/order/orderList.html', 'controller/order/orderList', {directives:[], services: ['service/buyerService'], filters:[] }));
            $stateProvider.state('app.orderDetail', lazyLoad.config('/orderDetail', 'view/order/orderDetail.html', 'controller/order/orderDetail', {directives:[], services: ['service/buyerService'], filters:[] }));
            $stateProvider.state('app.commodity', lazyLoad.config('/project', 'view/commodity/project.html', 'controller/commodity/project', {directives:[], services: ['service/buyerService'], filters:[] }));



            console.log(454545);
            //$urlRouterProvider.otherwise('/404');
        }])
})