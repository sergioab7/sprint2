import { debounce } from '../src/debounce';

jest.useFakeTimers();

describe('debounce function', () => {
    it('debe rebotar una función', () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 1000);

        // Llamar de inmediato a la función depurada
        debouncedFunc();
        expect(func).not.toBeCalled();

        // Tiempo rápido de avance
        jest.advanceTimersByTime(500);
        debouncedFunc();
        expect(func).not.toBeCalled();

        // Tiempo avance rápido par alcanzar el rebote
        jest.advanceTimersByTime(1000);
        expect(func).toBeCalledTimes(1);
    });

    it('debe depurar una función con argumentos', () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 1000);

        // Llamar inmediatamente a la funcion depurada con argumentos
        debouncedFunc('arg1', 'arg2');
        expect(func).not.toBeCalled();

        // Tiempo de avance rápido para alcanzar el tiempo de rebote
        jest.advanceTimersByTime(1000);
        expect(func).toBeCalledWith('arg1', 'arg2');
    });
});
