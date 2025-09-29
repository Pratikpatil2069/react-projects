export const EventHandling=()=>{
    const clickButton=(event)=>{
        console.log("i am clicked!");
    }
    const clickButton1=(name)=>{
        console.log(`i am ${name},!`);
    }
    return(
        <>
        {/*this is simple pass a reference of function*/}
        <button onClick={clickButton} >Click me</button>
        {/*this is flat line function using this we can pass the argumets to function */}
        <button onClick={()=>clickButton1("pratik")}>Click me1</button>
         {/*this is flat line function in that we write  a simple message also */}
        <button onClick={()=>console.log("i am pratik")}>click me2</button>
        </>
    )
}