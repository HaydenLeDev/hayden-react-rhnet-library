import React from 'react'
import Modal from "hayden-react-rhnet-library"

const App = () => {
  const isOpen = true

  return <Modal 
  isOpen={isOpen} 
  autoClose={true} 
  text={"Employé créer"} 
  isNotification={false}
  typeNotification="validate"
  />

}

export default App
