
import Modal from './messy-code/Modal'

import './App.css'

function App() {

  return (
    <>
    <Modal
      title="Delete Account"
      body="Are you sure to delete this acccount?"
      primaryAction={<button>Delete</button>}
      secondaryAction={<button>Cancel</button>}
    />

    </>
  )
}

export default App
