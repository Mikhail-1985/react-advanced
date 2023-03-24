import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { StateSchema } from '../../../app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';


// interface CounterProps {
//     className?: string;
// }

export const Counter = () => {

    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >+
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >-
            </Button>
        </div>
    );
};