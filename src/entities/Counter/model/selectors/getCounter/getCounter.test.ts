import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
describe('getCounter', () => {
    test('возврат счётчика', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});