import React from 'react'
import { useState } from "react"
import Modal from "hayden-react-rhnet-library"

const App = () => {
  const [isValidate, setIsValidate] = useState(true)
  return <Modal isValidate={isValidate} setIsValidate={setIsValidate} autoClose={true} text={"test"}/>

}

export default App
