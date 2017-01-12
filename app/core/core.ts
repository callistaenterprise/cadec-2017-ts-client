import {cacheModule} from './cache/cache';
import {dataStoresModule} from './data-stores/data-stores';

let coreModule: ng.IModule = angular.module('tsAddressBook.core', [
    cacheModule.name,
    dataStoresModule.name
]);

export {coreModule};
