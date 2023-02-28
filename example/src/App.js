import React from 'react'
import Modal from "hayden-react-rhnet-library"
import { useState } from 'react'


/**
 * Example of the modal component.
 * @returns Modal
 */
const App = () => {
  const [isOpen, setIsOpen] = useState(true)

  return <Modal
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    text={"Employé créer"}
    isNotification={false}
    typeNotification="validate"
  />

}

export default App
