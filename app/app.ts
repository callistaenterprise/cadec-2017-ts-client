///<reference path="../typings/index.d.ts" />

import 'angular';
//import 'oclazyload';
import 'angular-ui-router';
import {componentsModule} from './components/components';
import {coreModule} from './core/core';
require('angular-material/angular-material.css');

let appModule: ng.IModule = angular.module('tsAddressBook', [
    'ui.router',
    coreModule.name,
    componentsModule.name
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })
            .hashPrefix('!');
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('addressbookList');
        });
        $stateProvider
            .state('adddressbookList', {
                url: '/',
                views: {
                    'main': {
                        template: '<contact-list></contact-list>'
                    }
                }
            });
    });

angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule.name]);
});

