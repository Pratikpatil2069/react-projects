import { useState } from 'react'

import './App.css'
import Cards,{Login,Logout} from "./components/Cards"
//State Lifting:- state lifting means access the data from child to parent.
// generaly we transfer the data from parent components to child components ,but in state lifting we pass the data to parent componet through child. 
function App() {
  // create state 
  // manage state
  // change state
   const [name ,setName]=useState('');
  
   return (
     <>
       <Cards name={name} setName={setName}/>
       <p>i am parent name:{name}</p>
     </>
   )

  // this is the three conditional statements.
  //const [isLogin , setLogin]=useState(true);
  // 1st-

  // if(isLogin){
  //   return(
  //     <>  
  //       <Logout/>
  //     </>
  //   )
  // }else{
  //   return(
  //     <>
  //       <Login/>
  //     </>
  //   )
  // }
  
  // 2nd-

  // return(
  //   <>
  //   <div>
  //      {isLogin?<Logout/>:<Login/>}
  //   </div>
     
  //   </>
  // )

  // 3rd

  // return(
  //   <>
  //     {isLogin && <Logout/>}
  //   </>
  // )
}

export default App
