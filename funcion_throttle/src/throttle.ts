export function throttle(func: Function, delay: number): Function {
    let lastExecuted = 0;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function(this: any, ...args: any[]) {
        const now = Date.now();
        const elapsed = now - lastExecuted;

        if (elapsed >= delay) {
            func.apply(this, args);
            lastExecuted = now;
        } else {
            if (!timeout) {
                timeout = setTimeout(() => {
                    func.apply(this, args);
                    lastExecuted = now;
                    if (timeout) clearTimeout(timeout);
                    timeout = null;
                }, delay - elapsed);
            }
        }
    };
}
