import '../App.css'
import Sidebar from '../components/sidebar/Sidebar';
import RightSide from '../components/RightSide/RightSide';

import React from 'react'

const customers = () => {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
          <h3>Customers</h3>
          <RightSide/>
          
          

        </div>
    </div>
  )
}

export default customers