import { useState } from 'react'
import Modal from './with-pattern/modal/Modal'

import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col items-center'>
      <button onClick={()=>setIsOpen(true)}>Open Modal</button>

    <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>

          {/* we dont have to pass something as children: means we dont have to pass children like this:
          children={children} . 
          instead whatever we are writing between <Modal>........</Modal> whatever we are writing in place of dots, 
          thats will be the children and that will be passed automatically in place of children.
          */}

        <Modal.Header>
          <h2>Welcome!</h2>
        </Modal.Header>

        <Modal.Body>
          <p>This model build with compound component pattern</p>
        </Modal.Body>

        <Modal.Footer>
          <button>Close!</button>
          <button>Action!</button>
          <button>Help!</button>

        </Modal.Footer>

    </Modal>

    </div>
  )
}

export default App
