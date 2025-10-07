import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import Study from './Study'
import Material from './Material'
import Default from './Default'
// using react we create single page appliations but using react routing we create multiple pages.
// routing:-is used to load the pages like home,about and dashboard.

const router=createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>,
  },
  {
    path:"/about",
    element:
     <div>
      <Navbar/>
      <About/>
    </div>,
  },
  {
    path:"/dashboard",
    element:
     <div>
      <Navbar/>
      <Dashboard/>
    </div>,
    // so we move to the child pages in dash board so we do nested routing.
    children:[
      {
        path:'study',
        element:<Study/>
      },
      {
        path:'material',
        element:<Material/>
      }
    ]
  },
  {
    // in this like i add pratik this is id wecan access this using useParams() hook.
    // this hook only returns the id like pratik.
    path:"/student/:id",
    element:
    <div>
      <Navbar/>
      <ParamComp/>
    </div>
  },
  {
    //when we give not existing link then it shows this component.
    path:'*',
    element:<Default/>
  }

]);
function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
