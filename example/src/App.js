import React from 'react'
import Modal from "hayden-react-rhnet-library"
import { useState } from 'react'


/**
 * Example of the modal component.
 * @returns Modal
 */
const App = () => {
  const [isOpen, setIsOpen] = useState(true)
  const corpsHtml = <div><h1>Hello World</h1><p>I m Loic</p></div>
  return <Modal
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    text={"Employé créer"}
    isNotification={false}
    corpsHtml={corpsHtml}
  />

}

export default App
