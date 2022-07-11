import React, { useState } from 'react'
import './Card.css'

import { AnimateSharedLayout, motion } from 'framer-motion'
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import {UilTimes} from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'

const Card = (props) => {

    const [expanded, setExpanded] =useState(false)
  return (
    <AnimateSharedLayout>
        {
            expanded ? 

                <ExpandedCard param = {props} setExpanded={()=>setExpanded(false)}/> :

           
                <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
        }
    </AnimateSharedLayout>
  )
}
//CompactCard
function CompactCard({param, setExpanded}){
    const Png = param.png;
    return(
        <motion.div className="CompactCard"
        style={{
            background: param.color.background,
            boxShadow: param.color.boxShadow,

        }}

        onClick={setExpanded}
        layoutId='expandableCard'
        
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>Ksh.{param.value}</span>
                <span>Last 24 Hrs</span>

            </div>

        </motion.div>
    )
}

// ExpandedCard
function ExpandedCard({param, setExpanded}){
    const data = {
        options: {
            chart:{
                type: "area",
                height: "auto",
            },
            dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color: "#000",
                opacity:0.35,
            },
            fill:{
                colors:["#fff"],
                type: "gradient",                
            },

            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["white"]
            },

            tooltip:{
                x:{
                    format:"dd/MM/yy HH:mm",
                },
            },
            grid:{
                show:true,
            },

            xaxis:{
                type: "datetime",
                categories:[
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",

                ]
            }


        }
    }
    return(

        <motion.div className="ExpandedCard"
        style={{ 
        background: param.color.background,
        boxShadow: param.color.boxShadow,  
    }}
    layoutId = 'expandableCard'
    
    >
        <div style={{
                alignSelf: 'flex-end',
                cursor: 'Pointer',
                color: 'white'}}>
            <UilTimes onClick = {setExpanded} 
            
            />

            

        </div>
        <span>
            {param.title}
        </span>
        <div className="ChartContainer">
            <Chart series = {param.series} type='area' options={data.options}/>
        </div>
        <span>Last 24 Hrs</span>

    </motion.div>
    );
    
}

export default Card
