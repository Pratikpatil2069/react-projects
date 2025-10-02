import React from 'react'

function Cards(props) {
  return (
    <>
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        <p>name1:{props.name}</p>
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        <p>name2:{props.name}</p>
    </>
  )
}
export const Login=()=>{
    return(
        <>
            <button>Login</button>
        </>
    )
}
export const Logout=()=>{
    return(
        <>
            <button>Logout</button>
        </>
    )
}

export default Cards