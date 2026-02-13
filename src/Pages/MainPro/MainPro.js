import React from 'react'
import { useParams } from 'react-router-dom'
import './MainPro.css'
import { MainProductsData } from '../../Datas'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cartSlice'

export default function MainPro() {

  const { id } = useParams()
  const product = MainProductsData.find(prod => prod.id === parseInt(id))

  const dispatch = useDispatch()


  return (
    <div>
      <div className="MainProContainer py-5">

        <img
          src={product.img}
          alt={product.title}
          className="MainProImg me-4 py-2"
        />

        <div className="MainProInfos d-flex flex-column justify-content-center text-start">

          <h2 className="MainProTitle fw-bold mb-3">{product.title}</h2>

          <span className="MainProPrice mb-4 fw-semibold fs-3">{product.price}$</span>

          <button onClick={() => {
            dispatch(addToCart(product))
          }} className="MainProAddToCartBtn btn btn-primary rounded-pill py-2 px-4">
            Add to Cart
          </button>

        </div>

      </div>
    </div>

  )
}
