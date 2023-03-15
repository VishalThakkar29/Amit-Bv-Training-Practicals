import classes from './Counter.module.css';
import { counterAction } from '../store';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)



  const incrementHandler = () => {
    dispatch(counterAction.increment())
  }
  const increaseHandler = () => {
    dispatch(counterAction.increase(10))
  }
  const decrementHandler = () => {
    dispatch(counterAction.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };






  // const incrementHandler = () => {
  //   dispatch({ type: 'increment' })
  // }
  // const increaseHandler = () => {
  //   dispatch({ type: 'increase', amount: 5 })
  // }
  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement' })
  // }
  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' })
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      {show && <div >

        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>

      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
