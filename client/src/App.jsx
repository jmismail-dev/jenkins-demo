import { useEffect, useState } from 'react'
import logo from "./assets/nginx-logo.png"
import axios from 'axios';

import './App.css'

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    axios.get("http://localhost:5000/api").then(res => {
      setMessage(res.data.message)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: 'white' }}>HELLO  from REACT</p>
        <p style={{ color: 'red' }}> {message}</p>
      </header>
    </div>
  )
}

export default App
