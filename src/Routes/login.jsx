import '../App.css'

import LoginCard from '../components/LoginCard/LoginCard';

import React from 'react'

const login = () => {
  return (
    <div className="App">
        <div className='LoginGlass'>
          <LoginCard/>
        </div>
    </div>
  )
}

export default login