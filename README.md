# Plugin Modal for HRnet

> Library made for the HRnet application. 
> In this library you will find the modal.

[![NPM](https://img.shields.io/npm/v/hayden-react-rhnet-library.svg)](https://www.npmjs.com/package/hayden-react-rhnet-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save hayden-react-rhnet-library
```

## Usage


### Example of the code for the Modal Classique
```jsx
import React from 'react'
import { useState } from "react"
import Modal from 'hayden-react-rhnet-library'

const Example = () => {
  const [isOpen, setIsOpen] = useState(true)
  const corpsHtml = <div><h1>Hello World</h1><p>I love dev</p></div>
  return <Modal isOpen={isOpen} setIsOpen={setIsOpen} isNotification={false} corpsHtml={corpsHtml}/>
}

```

### Example of the code for the Modal Notification
```jsx
import React from 'react'
import { useState } from "react"
import Modal from 'hayden-react-rhnet-library'

const Example = () => {
  const [isOpen, setIsOpen] = useState(true)

  return <Modal isOpen={isOpen} setIsOpen={setIsOpen} text={"Hello world !"} isNotification={true} typeNotification="validate" autoClose={true}/>
}

```

### Modal component props

#### text 
Request a string. Injects the text you want into the component. Only works for notifications. If you want to put text in a classic modal use "corpsHtml"
####  isOpen
Request a boolean. True: opens the modal. False: closes the modal.
####  setIsOpen= function pour mettre a jour isOpen
Sends the state function to update the "isOpen" variable.
####  autoClose
Request a boolean. This option closes the modal after 5 seconds. True: activates the timer. False: disables the timer.
####  isNotification
Request a boolean. The component is then displayed as a notification on the right side of the screen. True: The component is a notification. False: The component displays normally.
####  typeNotification: {"validate"} || {"alert"} || {"error"} 
Request a string. 
- "validate" allows to have a positive notification.
- "alert" makes a notification to warn the user.
- "error" signals to the user that there is an error.
#### corpsHtml
Requests a variable containing html. This is displayed when you open a classic modal.

## License

MIT © [HaydenLeDev](https://github.com/HaydenLeDev)
