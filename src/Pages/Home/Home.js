import React, { useContext, useState } from 'react'
import './Home.css'
import Units from '../../Components/Units/Units'
import Caruser from '../../Components/Caruser/Caruser'

export default function Home() {
  return (
    <div className='homeWrapper mt-5'>
      <Units />
      <Caruser/>
    </div>
  )
}
