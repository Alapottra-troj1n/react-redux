import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store/index';

function App() {


  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  const increment = () => {
    //every object property of the object that is injected on dispatch function goes inside ( action ) in  the store.
    //you can access type with action.type
    dispatch(actions.increment())


  }


  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addByTen = () => {
    dispatch(actions.addByTen(10))
  }

  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment} >+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addByTen} >add by 10</button>
    </div>
  );
}

export default App;
