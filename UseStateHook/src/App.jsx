import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter ,{NameChanger,DemoButton}  from './components/Counter'
function App() {
  const [count1 ,count1Fun]=useState(0);
  
   const countFun = ()=>{
    count1Fun( count1===10?0:count1+1);
  }

  return (
    <>
      <Counter/>
      <NameChanger/>
      <DemoButton btn={countFun} count={count1}/>
    </>
  )
}

export default App
