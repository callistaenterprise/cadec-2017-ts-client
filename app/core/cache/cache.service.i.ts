interface ICacheService {
    getAllByPrefix<T>(prefix: string): Array<{key: string, value: T}>;
    add<T>(value: T, prefix: string): void;
    update<T>(key: string, value: T): void;
    remove(key: string): void;
}

export {ICacheService};
