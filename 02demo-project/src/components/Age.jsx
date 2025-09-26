// this is the function in that we use some cnditions with props .
function Pratik(props) {
  const {name,age}=props; // this is the array in that we access all parameters that pass as arguments.
  // we can still use directly using props.name or props.age without creating the arr. 
  return (
    <> 
      <p>I am now watching Movies  my name is {name} and i am {age} years old</p>
      <button>{age>=18?"watch":"not Watch"}</button>
      <p>{age>=18 && "you can vote"}</p>
      <p>{age>=18 || "you can vote"}</p>
      <p>{props.children}</p>
    </>
  )
}
// this is not a default export so we can import this in {}.
export function Card(){
  return(
    <>
      <h1>mens section</h1>
      <h2>womens section</h2>
    </>
  )
}
export default Pratik // this is the default export which means we can import in simple way not in {}.