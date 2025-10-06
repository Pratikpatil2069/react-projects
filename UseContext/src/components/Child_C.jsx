import React,{useContext} from 'react'
import {theamContext,UserContext} from "../App"
const Child_C = () => {
  const user=useContext(UserContext);
    const {theam,setTheam}=useContext(theamContext);
    const handleTheam=()=>{
      if(theam==='light'){
        setTheam('dark');
      }else{
        setTheam('light');
      }
    }
  return (
    <>
        <button onClick={handleTheam}>dark mode</button>

        <h1>{user.name}</h1>
    </>
  )
}

export default Child_C