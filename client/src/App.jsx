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

    axios.get("/api/nginx").then(res => {
      setProxy(res.data)
    })
  }, []);

  const getMonoSpaceFont = (color) => {
    return {
      color,
      fontFamily: 'monospace'
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={getMonoSpaceFont('white')}>NGINX</p>
        <h3>Build #1</h3>
        {message &&
          <p style={getMonoSpaceFont('red')}> {message}</p>
        }
        {proxy && (
          <p style={getMonoSpaceFont('red')}> {JSON.stringify(proxy)}</p>
        )}
      </header>
    </div>
  )
}

export default App
