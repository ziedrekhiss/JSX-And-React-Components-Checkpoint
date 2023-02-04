import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Videogrid from './Components/Videogrid'

function App() {
  return (
    <div className='container-fluid' style={{paddingLeft:'40px'}}>
      <Navbar/>
      <div className='row'>
        <Sidebar/>
        <div className='col-10 '><Videogrid/></div>
      </div>
    </div>
    
  )
}

export default App
