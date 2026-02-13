import React from 'react'
import { Link } from 'react-router-dom'
import './MainProducts.css'
import { MainProductsData } from '../../Datas'

export default function MainProducts() {
    return (
        <>
            {MainProductsData.map(product => (
                <Link
                    key={product.id}
                    to={`/store/${product.id}`}
                    className="mainProductLink"
                >
                    <div className='mainProductCard text-center'>
                        <img src={product.img} alt={product.title} className='mainProductImg mb-3' />
                        <h5 className='mainProductTitle mb-2'>{product.title}</h5>
                        <span className='mainProductPrice text-secondary'>${product.price}</span>
                    </div>
                </Link>
            ))}
        </>
    )
}
