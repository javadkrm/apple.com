import React from 'react'
import { Link } from 'react-router-dom'
import './ProductsCategory.css'
import { productsCategoryData } from '../../Datas'

export default function ProductsCategory() {

    const categories  = productsCategoryData
    return (
        <>
            {categories.map(category => (
                <Link key={category.id} className='text-decoration-none' to={`/shop/${category.id}`}>
                    <div className='categoryItem'>
                        <div className='categorImage'>
                            <img src={category.img} />
                        </div>
                        <div className='categoryInfo mt-2 text-dark fw-medium'>
                            {category.category}
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}
