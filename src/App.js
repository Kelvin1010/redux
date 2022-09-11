import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {actions} from './redux/store';

function App() {

  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch();

  const Increment = () => {
    // dispatch({type:'INC'})
    dispatch(actions.Increment())
  }
  const Decrement = () => {
    // dispatch({type:'DEC'})
    dispatch(actions.Decrement())
  }

  const addBy = () => {
    // dispatch({type: 'ADD', payload: 10})
    dispatch(actions.addBy(20))
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={Increment} >Increment</button>
      <button onClick={Decrement} >Decrement</button>
      <button onClick={addBy}>Add Value</button>
    </div>
  );
}

export default App;
