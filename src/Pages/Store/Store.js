import React, { useState } from 'react'
import './Store.css'
import { Link } from 'react-router-dom'
import OffBox from '../../Components/OffBox/OffBox'
import { LuExternalLink } from "react-icons/lu";

import CardsScroller from '../../Components/CardsScroller/CardsScroller';
import ProductsCategory from '../../Components/productsCategory/ProductsCategory';


export default function Store() {

  return (
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
            <div className='productsCategory'>
              <div className='categoriesContainer d-flex align-items-center justify-content-between'>
                <ProductsCategory/>
              </div>
            </div>
            <div className='cardsScroller'>
              <div className='cardsScrollerHeader pb-4 text-start'>
                <h3 className='cardsScrollerTitle m-0'>
                  <span className='colorTitle'>The latest.</span> Truly awe-inspired gifts.
                </h3>
              </div>
              <div className='cardsScrollerContent'>
                <div className='cardsScrollerContainer py-5 d-flex align-items-center'>
                  <CardsScroller/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
