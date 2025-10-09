import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset ,incrementByAmount} from './features/counter/counterSlice'


// Redux-toolkit:-it is all about state management in cenralised store that managed state is access all components.
// problem :- when we pass the data from parent components to child_1 componets to child_2 components to child_3 and so on (called prop drilling ) so the middle one component is distroy then all components after that is also distroy (means data is not give to after that components).
// so solve this problem using centralised store.
// centralised store:- this is place where all states are manage (create ,update,delete) , and any component that can access these states .
// How Centralised store works:-there is some terms in store that do there works 
// 1.Action:- is nothing but the event or (event + additional infomation) with wrap.
// 2.Reducer:- it is a functions where we can add our logic and modify the data.
// slice:- it track the initial state and state updation functions of componets.
// store:- it is a collection of data(like states).
// state:- it is a data.

function App() {
  const val=10;

  const count=useSelector((state)=>state.counter.value);

  const dispatch=useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

   function hadleResetClick(){
    dispatch(reset());
  }

   function hadleIncrementByAmoutClick(){
    dispatch(incrementByAmount(10));
  }
  return (
    <>
      <div>
        <button onClick={handleIncrementClick}> + </button>
        <p>Count:{count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br />
        <br />
        <button onClick={hadleResetClick}>reset</button>
        <br />
        <br />
        <button onClick={hadleIncrementByAmoutClick}>incremnet by 10</button>
      </div>

    </>
    
  )
}

export default App
