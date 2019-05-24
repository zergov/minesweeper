import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('...')

  // Load the message only when the component mounts
  useEffect(() => {
    getMessage()
  }, [])

  async function getMessage() {
    const response = await axios.get('/api')
    setMessage(response.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  )
}

export default App
