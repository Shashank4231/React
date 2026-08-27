import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user='aman' age = {18}/>
      <Card user='rohan' age = {28}/>
    </div>
  )
}

export default App