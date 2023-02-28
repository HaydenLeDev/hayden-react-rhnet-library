# hayden-react-rhnet-library

> Library made for the HRnet application. 
> In this library you will find the modal.

[![NPM](https://img.shields.io/npm/v/hayden-react-rhnet-library.svg)](https://www.npmjs.com/package/hayden-react-rhnet-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save hayden-react-rhnet-library
```

## Usage


### Example of the code for the Modal
```jsx
import React, { Component } from 'react'

import Modal from 'hayden-react-rhnet-library'
import 'hayden-react-rhnet-library/dist/index.css'

class Example extends Component {
  render() {
    return <Modal />
  }
}
```
### Modal component props

text="Text example" 
isOpen={bool}
setIsOpen= function pour mettre a jour isOpen
autoClose={bool}


## License

MIT © [HaydenLeDev](https://github.com/HaydenLeDev)
