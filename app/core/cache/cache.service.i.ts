interface ICacheService {
    //getAll<T>(): Array<T>;
    add<T>(value: T): void;
    update<T>(key: string, value: T): void;
    remove(key: string): void;
}

export {ICacheService};
