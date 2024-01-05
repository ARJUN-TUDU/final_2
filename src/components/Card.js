import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Map from '../Map';


const Card = ({name,id}) => {
   
    

  return (
    <Link to={`/details/${id}`}>
    
    <motion.div className='card'

    whileHover={{
        scale:1.2,
        rotate:20
    }} 
    
    >{name}</motion.div>
    
    
    </Link>



  )
}


export default Card