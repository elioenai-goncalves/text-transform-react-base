import { useState } from 'react'
import './App.css'
import UppercaseColor from './scripts/text-uppercase-color.jsx'
import Button from './scripts/button-label.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UppercaseColor/>
    <Button/>
    </>
  )
}

export default App
