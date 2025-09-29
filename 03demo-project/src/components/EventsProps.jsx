export const EventsProps=()=>{
    const myName=(name)=>{
        console.log(`hey, my name is ${name}`);
    }
    return(
        <>
            <user onClick={()=>myName("pratik")}/>
        </>
    )
}
 const user=(props)=>{
    return(
        <>
            <button onClick={props.myName}>my name</button>
        </>
    )
}
