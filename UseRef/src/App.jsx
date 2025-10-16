import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//useRef hook:- this hook is used to when we want to update the simple variable on every rerender.
// and also we access the dom of any element.
function App() {
  //let val=0;
  // when we declare simple variable then it does not change on every rerender, so thats why we use useRef hook.
  // let val=useRef(0);
   let btnref=useRef();
   let timer=useRef(null);
   const [time,setTime]=useState(0);
   const [count,setCount]=useState(0);
   const handeler=()=>{
   // val.current+=1;
    //console.log("val=",val.current);
    setCount(count+1);
   }
   function changeColor(){
    btnref.current.style.backgroundColor="red";
   }
   function start(){
    timer.current=setInterval(()=>{
      setTime(time=>time+1);
    },1000);
   }

   function stop(){
      clearInterval(timer.current);
      timer.current=null;
    
   }

   function reset(){
    stop();
    setTime(0);
   }
  return (
   <>
      <button ref={btnref} onClick={handeler}>Click me</button>
      <h1>count={count}</h1>
      <br />
      <br />
      <button  onClick={changeColor}>reference</button>
      <br />
      <br />

      <h1>Time={time}</h1>
      <button onClick={start}>start</button>
      <br />
      <br />
      <button onClick={stop}>stop</button>
      <br />
      <br />
      <button onClick={reset}>reset</button>
    
       </>
  )
}

export default App
