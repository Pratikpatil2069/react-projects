
import './App.css'
import Pratik, { Card } from "./components/age";

// this is the function in that we use simple components and whith some props.
function App(){
  return(
    <>
      <Pratik name="pratik" age={21}>
        <h1>hey i am jsx passing as props, access me using props.children</h1>
      </Pratik>
      <Card/>
    </>
  )
}


export default App
