import React from 'react'

// when we use react.memo then it not rerender until the props is not change.
// when we change the props then it rerenders.
// but limitation is when we pass the function as props then it not works means it rerender every increment of count.
// so this limation is recover using useCallBack hook.
  const Child_1 = React.memo((props) =>{ 
    console.log("child_1 rerender");
  return (
    <button onClick={props.fun}>{props.name}</button>
  )
})

export default Child_1