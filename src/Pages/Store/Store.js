import React, { useState } from 'react'
import './Store.css'
import { Link } from 'react-router-dom'
import OffBox from '../../Components/OffBox/OffBox'
import { LuExternalLink } from "react-icons/lu";

import productsCategoryContext from '../../Contexts/productsCategoryContext';
import { productsCategoryData } from '../../Datas';


export default function Store() {

  const [categories, setCategories] = useState(productsCategoryData)
  return (
    <productsCategoryContext.Provider value={{
      categories
    }}>

      <div className='storeWrapper'>

        <OffBox />
        <div className='storeContent mt-5'>
          <div className='container'>
            <div className='storeHeader d-flex flex-wrap align-items-center justify-content-between w-100'>
              <h1 className='storeTitle'>Store</h1>
              <div className='storeRight d-flex flex-column align-items-end justify-content-end'>
                <h3 className='storeText fw-semibold w-75 text-end'>Give something special this holiday.</h3>
                <Link className='mt-1 text-decoration-none d-flex align-items-center' to='/'>Find an Apple Store  <LuExternalLink className='ms-1' /></Link>
              </div>
            </div>
            <div className='productsCategory  py-5'>
              <div className='categoriesContainer d-flex align-items-center justify-content-between'>
                {categories.map(category => (
                  <Link className='text-decoration-none' to={`/shop/${category.id}`}>
                    <div className='categoryItem'>
                        <div className='categorImage'>
                          <img src={category.img}/>
                        </div>
                        <div className='categoryInfo mt-2 text-dark fw-medium'>
                          {category.category}
                        </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </productsCategoryContext.Provider>
  )
}
