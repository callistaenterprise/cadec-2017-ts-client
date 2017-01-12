import {ICacheService} from './cache.service.i';

class CacheService implements ICacheService {
    private cache: ng.ICacheObject;

    static $inject = [
        '$cacheFactory',
        'cachePrefix'
    ];

    constructor(private $cacheFactory: ng.ICacheFactoryService, private cachePrefix: string) {
        this.cache = $cacheFactory(cachePrefix);
    }

    private s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    private guid(): string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    /*getAll(): Array<T>{

     var lsKeys = this.cache.p,
     contacts = [];
     angular.forEach(lsKeys, (key) => {
     var value = this.localStorageService.get(key);
     contacts.push({'key': key, 'value': value});
     });
     return contacts;
     }*/
    add<T>(item: T) {
        this.cache.put(this.guid(), item);
    }

    update<T>(uuid: string, item: T) {
        this.cache.put(uuid, item);
    }

    remove(uuid: string) {
        this.cache.remove(uuid);
    }

}

export {CacheService};
