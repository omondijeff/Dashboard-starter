import '../App.css'
import Sidebar from '../components/sidebar/Sidebar';
import RightSide from '../components/RightSide/RightSide';

import React from 'react'

const requests = () => {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
          <h3>Tickets</h3>
          <RightSide/>
          
          

        </div>
    </div>
  )
}

export default requests