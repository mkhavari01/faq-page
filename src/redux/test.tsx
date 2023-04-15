import { useDispatch, useSelector } from 'react-redux';
// import { RootState, increment } from './store';

import { RootState } from './store';
import { incrementAction,decrementAction } from './actions';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>dispatch(incrementAction())}>Increment</button>
      <button onClick={()=>dispatch(decrementAction())}>Decrement</button>
    </div>
  );
}

export {Counter}