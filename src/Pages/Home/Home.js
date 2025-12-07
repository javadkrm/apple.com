import React, { useContext, useState } from 'react'
import './Home.css'
import Units from '../../Components/Units/Units'

export default function Home() {
  return (
    <div className='homeWrapper mt-5'>
      <Units />
    </div>
  )
}
