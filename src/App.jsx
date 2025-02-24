import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Todolist from './Todolist'

function App() {

  return (
    <div className="content-div">
      <Todolist />
    </div>
  )
}

export default App
