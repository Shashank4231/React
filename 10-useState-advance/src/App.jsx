import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({ user: 'ranabir', age: 20 })

  // const btnClicked = () => {
  //   let newNum = { ...num };
  //   newNum.user = 'anubhav'
  //   newNum.age = 22
  //   setNum(newNum)
  // }

  const btnClicked = ()=>{
    setNum(prev=>({...prev,age:50}))
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App