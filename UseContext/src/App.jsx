import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child_A from './components/Child_A';
// useContext:-when we pass the data to grandChild or depest node directly then we use the useContext.
// Generaly we pass the data through multiple nodes so the performance is low ,this limitation is covered using useContext.
 // step1:- create a Context.
  const UserContext=createContext();
  const theamContext=createContext();
   // step2:-wrap all the child inside a provider.

  //Step3:-pass the value.
 function App() {
   const [user ]=useState({name:"pratik"});
    const [theam,setTheam]=useState('light');
   return (
     <>     
     <UserContext.Provider value={user}>
      <theamContext.Provider value={{theam,setTheam}} >
      <div id="theam" style={{backgroundColor:theam==='light'?"beige":"black", color: theam === 'light' ? 'black' : 'white'}}>
        <Child_A/>
      </div>
    </theamContext.Provider>
     </UserContext.Provider>
     
    </>
   )
 }

 export default App
 export {UserContext}
 export {theamContext}




