import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
import {EventHandling} from "./components/EventHandling"
import {EventsProps} from"./components/EventsProps"
function App() {
  return (
    <>
      <EventHandling/>
      <EventsProps/>
    </>
  )
}

export default App
