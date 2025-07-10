import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import shoheiImg from './assets/shohei.jpeg'

function App() {
  // State for API data
  const [progressData, setProgressData] = useState({ current: 0, pace: 0 })

  // Color codes for each indicator (both blue shades)
  const colors = {
    current: '#274bdb', // royal blue
    pace: '#7faaff',    // lighter blue
    black: '#000000'
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/progress/')
      .then(res => {
        setProgressData(res.data)
      })
      .catch(() => {
        // fallback to static values if API fails
        setProgressData({ current: 31, pace: 62 })
      })
  }, [])

  const { current, pace } = progressData

  return (
    <div className="main-container">
      <img
        src={shoheiImg}
        alt="Shohei"
        className="placeholder-image"
      />
      <div className="progress-bar-container" style={{ position: 'relative' }}>
        {/* Progress up to current */}
        <div className="progress-bar-segment" style={{ width: `${current}%`, background: colors.current, zIndex: 2 }}></div>
        {/* Progress up to pace */}
        <div className="progress-bar-segment" style={{ width: `${pace}%`, background: colors.pace, opacity: 0.6, zIndex: 1, position: 'absolute', top: 0, left: 0 }}></div>
        <div className="progress-bar-bg"></div>
      </div>
      {/* Number indicators below the bar, lined up with progress */}
      <div className="progress-numbers-row">
        <div className="progress-number" style={{ left: `${current}%`, color: colors.black }}>
          {current}
        </div>
        <div className="progress-number" style={{ left: `${pace}%`, color: colors.black }}>
          {pace}
        </div>
      </div>
      {/* Legend */}
      <div className="progress-legend">
        <span className="legend-item"><span className="legend-dot" style={{ background: colors.current }}></span>Current</span>
        <span className="legend-item"><span className="legend-dot" style={{ background: colors.pace }}></span>Pace</span>
      </div>
    </div>
  )
}

export default App
