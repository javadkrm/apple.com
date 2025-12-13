import React, {useContext, useState} from 'react'
import './Mac.css'
import OffBox from '../../Components/OffBox/OffBox'
import productsContext from '../../Contexts/productsContext'
import Categories from './Categories/Categories'
import MacProducts from './MacProducts/MacProducts'

export default function Mac() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  return (
    <div className='macContainer'>
      <OffBox />
      <div className='container'>
        <div className='macContent'>
          <div className='macTitleWrapper py-5 d-flex justify-content-center justify-content-lg-start w-100'>
            <span className='macTitle pt-5'>Mac</span>
          </div>
          <div className='categories d-flex flex-nowrap w-50 justify-content-between rounded-pill px-2 py-2 mb-4'>
            <Categories onSelect={(c) => setSelectedCategory(c)} />
          </div>
          <div className='macProducts'>
            <div className='row'>
              <MacProducts selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}