import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormDZ from './components/formDZ/FormDZ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormDZ/>
    </div>
  )
}

export default App
