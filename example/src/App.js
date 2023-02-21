import React from 'react'
import { useState } from "react"
import 'hayden-react-rhnet-library/dist/index.css'
import { Modal } from "hayden-react-rhnet-library"

const App = () => {
  const [isValidate, setIsValidate] = useState(true)
  return <Modal  isValidate={isValidate} setIsValidate={setIsValidate} autoClose={false}/>
}

export default App
