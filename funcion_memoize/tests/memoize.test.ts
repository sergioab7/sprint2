import { memoize } from '../src/memoize';

describe('memoize function', () => {
    it('should memoize a function', () => {
        const mockFunction = jest.fn().mockReturnValue(42);
        const memoizedFunction = memoize(mockFunction);

        const result1 = memoizedFunction('arg1', 'arg2');
        const result2 = memoizedFunction('arg1', 'arg2');
        const result3 = memoizedFunction('arg1', 'arg2');

        expect(mockFunction).toBeCalledTimes(1);

        expect(result1).toBe(42);
        expect(result2).toBe(42);
        expect(result3).toBe(42);
    });

    it('should memoize a function with differents arguments', () => {
        const mockFunction = jest.fn().mockReturnValue('result');
        const memoizedFunction = memoize(mockFunction);

        const result1 = memoizedFunction('arg1', 'arg2');
        const result2 = memoizedFunction('arg3', 'arg4');

        expect(mockFunction).toBeCalledTimes(2);

        expect(result1).toBe('result');
        expect(result2).toBe('result');
    });
});
