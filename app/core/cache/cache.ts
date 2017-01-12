import {CacheService} from './cache.service';

let cacheModule: ng.IModule = angular.module('tsAddressBook.core.cache', [])
    .constant('cachePrefix', 'tsAddressBook')
    .service('CacheService', CacheService);

export {cacheModule};
