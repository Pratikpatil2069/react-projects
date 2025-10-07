import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // this hook is used to move the next page.
  const navigate=useNavigate();
  const handelevent=()=>{
    navigate('/dashboard');
  }
  return (
    <>
       <div>Home</div>
    <button onClick={handelevent}>dashBoard</button>
    </>
   
  )
}

export default Home