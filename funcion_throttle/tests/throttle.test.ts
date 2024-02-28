import { throttle } from '../src/throttle';

jest.useFakeTimers();

describe('throttle function', () => {
    it('should throttle a function', () => {
        const func = jest.fn();
        const throttledFunc = throttle(func, 1000);

        // Llamar varias veces a la función throttlefunc
        throttledFunc();
        throttledFunc();
        throttledFunc();

        jest.advanceTimersByTime(500);
        expect(func).toBeCalledTimes(1);

        jest.advanceTimersByTime(600);
        expect(func).toBeCalledTimes(2);

        throttledFunc();
        expect(func).toBeCalledTimes(3);
    });

    it('should throttle a function with arguments', () => {
        const func = jest.fn();
        const throttledFunc = throttle(func, 1000);

        throttledFunc('arg1', 'arg2');
        expect(func).toBeCalledWith('arg1', 'arg2');
    });
});
