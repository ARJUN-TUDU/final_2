
import React from 'react'
import { useState,useEffect } from 'react'
import Map from '../Map';
import Card from '../components/Card';

const Home = () => {
  
  return (

    <div style={{
        display:'flex', alignItems:'center', justifyContent:"center"
    }}>
          {
              Map.map((x) => {
                return  < Card name = {x.name} id = {x.id} />
              }
              )
          }
    </div>

  )
}

export default Home