export function memoize(func: Function): Function {
    const cache = new Map<string, any>();

    return function(this: any, ...args: any[]) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = func.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}
