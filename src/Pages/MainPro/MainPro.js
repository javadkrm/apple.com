import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import productsContext from '../../Contexts/productsContext'
import './MainPro.css'

export default function MainPro() {

  const { mainProducts } = useContext(productsContext)
  const { id } = useParams()
  const product = mainProducts.find(prod => prod.id === parseInt(id))
  const { userBagDatas, setUserBagDatas } = useContext(productsContext)

  const addToUserBag = (pro) => {
    let isInUserBag = userBagDatas.some(product => product.id === pro.id)

    if (!isInUserBag) {
      let newProductInfo = {
        id: userBagDatas.length + 1,
        title: pro.title,
        img: pro.img,
        price: pro.price,
        count: 1
      }

      setUserBagDatas([...userBagDatas, newProductInfo])
    } else {
      let userBag = [...userBagDatas]

      userBag.some(product => {
        if (product.title === pro.title) {
          product.count++ 
          return true
        }
      })

      setUserBagDatas(userBag)
    }

    console.log(userBagDatas);
    
  }

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
            addToUserBag(product)
            
          }} className="MainProAddToCartBtn btn btn-primary rounded-pill py-2 px-4">
            Add to Cart
          </button>

        </div>

      </div>
    </div>

  )
}
