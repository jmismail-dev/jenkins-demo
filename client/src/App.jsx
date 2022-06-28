import { useEffect, useState } from 'react'
import logo from "./assets/nginx-logo.png"
import axios from 'axios';

import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [proxy, setProxy] = useState('')
  useEffect(() => {
    axios.get("http://localhost:5000/api").then(res => {
      setMessage(res.data.message)
    })

    axios.get("/api").then(res => {
      setProxy(res.data.message)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: 'white' }}>NGINX</p>
        <p style={{ color: 'red' }}> {message}</p>
        <p style={{ color: 'red', fontWeight: 'bold' }}> {proxy}</p>
      </header>
    </div>
  )
}

export default App
