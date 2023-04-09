import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Article from './component/Article'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Article />
    </div>
  )
}

export default App
