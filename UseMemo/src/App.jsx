import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// useMemo Hook:- this hook is basicaly used to store the value before rerender the page.
// means suppoese we calculate a (2*2) and then rerender the page so the compiler again clculate the (2*2) so our aplication is get slow so thats whay we use useMemo hook.
// the main purpose of useMemo hook to some components are stay stable means keep stay as it is after every rerender then we use this hook.

function App() {
 const [count,setCount]=useState(0);
 const square=(num)=>{
  for(let i=0;i<=1000000000;i++){};
  return num*num;
 }
// this is simple call the funcion .
// problem is when page rerenders then this function call again so recover this problem we use useMemo hook
  // let squr=square(10);
  // useMemo hook.
  let squr=useMemo(()=>square(10),[10]);
  return (
    <>
      <button onClick={()=>setCount(count+1)}>Click me</button>
      <br />
      <p>count={count}</p>
      <br />
      <p>square={squr}</p>
    </>
  )
}

export default App
