import { counterReducer } from 'entities/Counter';
import { counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';
describe('counterSlice.test', () => {
    test('тест слайса счётчика при пустом стэйте', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
    test('тест слайса счётчика increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('тест слайса счётчика decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
});