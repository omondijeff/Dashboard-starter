import React from 'react'
import { useEffect, useState } from "react";
import './Sidebar.css'
import Logo from '../../imgs/logo-resized.png'
import { SidebarData } from '../../Data/Data';
import { UilSignOutAlt,UilBars } from '@iconscout/react-unicons'
import { motion } from 'framer-motion';
import {Link} from "react-router-dom"

const Sidebar = () => {
    const [selected, setSelected] = useState(0)
    const [expanded, setExpanded] = useState(true)

    const sidebarVariants = {
        true:{
            left:'0'
        } ,
        false:{
            left:'-60%'
        }
    }




  return (
    <>
    <div className = 'bars'style={expanded?{left:'60%'}:{left:'5%'}}
    onClick={()=>setExpanded(!expanded)}
    >
        <UilBars/>
        
    </div>
   <motion.div className="Sidebar" 
   variants={sidebarVariants}
   animate = {window.innerWidth<=768?`${expanded}`:''}

   
   >
    {/* logo */}
    <div className="logo">
        <img src={Logo} alt="" />
        <span>
            {/* Compact<span>Hydro</span> */}
        </span>

    </div>
    {/* menu */}
    <div className="menu">
        {SidebarData.map((item, index)=>{
            return(
                <div className={selected===index?'menuItem active': 'menuItem'}
                key={index}
                onClick={()=>setSelected(index)}
                
                >
                    <item.icon/>
                    <span>
                        <Link to={`${item.link}`}>{item.heading}</Link>
                    </span>
                </div>
            )
        })}

        <div className="menuItem">
            <UilSignOutAlt/>

        </div>
        
    </div>
   </motion.div>
   </>
  )
}

export default Sidebar