import {ICacheService} from './cache.service.i';

class CacheService implements ICacheService {
    private cache: ng.ICacheObject;
    private keys: Array<string>;

    static $inject = [
        '$cacheFactory',
        'cachePrefix'
    ];

    constructor(private $cacheFactory: ng.ICacheFactoryService, private cachePrefix: string) {
        this.cache = $cacheFactory(cachePrefix);
        this.keys = [];
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

    getAllByPrefix<T>(prefix: string): Array<{key: string, value: T}> {
        let foundItems: Array<{key: string, value: T}> = [];
        for (let key of this.keys) {
            if (key.indexOf(prefix, 0) > -1) {
                let item: T = <T>this.cache.get(key);
                foundItems.push({'key': key, 'value': item});
            }
        }
        return foundItems;
    }

    add<T>(item: T, prefix: string) {
        let newKey: string = prefix + '-' + this.guid();
        this.keys.push(newKey);
        this.cache.put(newKey, item);
    }

    update<T>(key: string, item: T) {
        this.cache.put(key, item);
    }

    remove(key: string) {
        this.cache.remove(key);
        var indexOfKey: number = this.keys.indexOf(key, 0);
        if (indexOfKey > -1) {
            this.keys.splice(indexOfKey, 1);
        }
    }

}

export {CacheService};
