import { useState ,useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child_1 from './assets/components/Child_1';

// useCallBack:-this hook prevent the unnessary rerender of child components.
function App() {
  const[count,setCount]=useState(0);
  const handleFun=useCallback(
    () => {
      setCount(prev => prev + 1)
    },
    [],
  )


  return (
    <>
      <button onClick={handleFun}>Click me </button>
      <br />
      <p>count={count}</p>
      
      <div>
        { /*here we pass finction as props then react.memo is not works so we use useCallBack hook*/}
        <Child_1 name="paratik" fun={handleFun}/>
      </div>
      
    </>
  )
}

export default App


