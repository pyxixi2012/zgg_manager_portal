/**
 * Created by Administrator on 2016-07-11.
 */
define(['service/config'],function (config) {
    return['$rootScope', '$scope',function($rootScope, $scope) {
        $rootScope.appTitle = "知果果管理后台";
        $scope.app = {
            name: '管理平台',
            version: '1.3.3',
            // for chart colors
            color: {
                primary: '#7266ba',
                info:    '#23b7e5',
                success: '#27c24c',
                warning: '#fad733',
                danger:  '#f05050',
                light:   '#e8eff0',
                dark:    '#3a3f51',
                black:   '#1c2b36'
            },
            settings: {
                themeID: 3,
                navbarHeaderColor: 'bg-black',
                navbarCollapseColor: 'bg-black',
                asideColor: 'bg-white b-r',
                headerFixed: true,
                asideFixed: false,
                asideFolded: false,
                asideDock: false,
                container: false
            }
        }
    }]
})