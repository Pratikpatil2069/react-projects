import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useEffect:-use effect hook is used to show the side effect when the commoent rerenders.
function App() {
  // first:-side Effect Function.
  //Secont:-Clean up function.
  // third:-comma seperated dep list.
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  const [count ,setCount]=useState(0);
   const [count1 ,setCount1]=useState(1);
  const handelEvent=()=>{
    setCount(count+1);
  }
   const handelEvent1=()=>{
    setCount1(count1+1);
  }

  // variation: 1
  //runs on every render.
  // useEffect(()=>{
  //   alert("i am run on each render!");
  // });

  // variation :2
  // runs on only first render.
  // useEffect(()=>{
  //   alert("i will  run only first render! ");
  // },[]);

  // variation:3
  // run on only renders perticular components;
  // useEffect(()=>{
  //   alert("i run only when count is render");
  // },[count]);

  // variation:4
  // run on multiple dependancies.
  // useEffect(()=>{
  //    alert("i run only when count or count1 is render");
  // },[count,count1]);

  // variation:5
  // implements first, secont and third .
  // useEffect(() => {
  //     alert("i run on count is updated! ");

  //   return () => {
  //     alert("i am clean up function that renders when previous components is descards");
  //   }
  // }, [count]);
  
  return (
    <>
      <button onClick={handelEvent}>click me</button>
      <h1>count:{count}</h1>
      <button onClick={handelEvent1}>click me</button>
      <h1>count1:{count1}</h1>
    </>
  )
}

export default App
