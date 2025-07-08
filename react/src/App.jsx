import { useState } from 'react'
import './App.css'
import shoheiImg from './assets/shohei.jpeg'

function App() {
  const [progress, setProgress] = useState(50) // Example progress value

  return (
    <div className="main-container">
      <img
        src={shoheiImg}
        alt="Shohei"
        className="placeholder-image"
      />
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default App
