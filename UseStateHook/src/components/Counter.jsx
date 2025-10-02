import React, { useState } from 'react'
// Hooks:- hooks are used to hook/access the functionalities that are provided by reat.js.
//useState Hook:- in use state it holds two things 1st is variable that can store the state of perticular components and 2nd is function that can use to modify the state.
// any component that must hold the state that is depends on that component,like as a person me my state is money.
// so we can access that that state using useState hook and make changes.
 const Counter = () => {
    const [count,countFun]=useState(0);
  return (
    <div>
    <p>count={count}</p>
    <button onClick={()=>{countFun(count+1)}}>click me</button>
    </div>
  )
}
 export const NameChanger = () => {
    const [name,nameFun]=useState("Partik");
  return (
    <div>
    <p>name={name}</p>
    <button onClick={()=>{nameFun(name==="Pratik"?"Rohan":"Pratik")}}>click me</button>
    </div>
  )
}

export const DemoButton=(props)=>{
    return(
        <>
            <p>Count1={props.count}</p>
            <button onClick={props.btn}>Click me</button>
        </>
    )
}

export default Counter;
