import React, { useState } from 'react'

const App = () => {

  let currTime = new Date().toLocaleTimeString()
  const [cTime, setCTime] = useState(currTime)

  const GetTime = () => {
    currTime = new Date().toLocaleTimeString()
    setCTime(currTime)
  }

  return (
    <>
      <h1>{cTime}</h1>
      <button onClick={GetTime}>Get Time</button>
    </>
  )
}

export default App
