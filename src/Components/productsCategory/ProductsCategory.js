import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ProductsCategory.css'
import productsCategoryContext from '../../Contexts/productsCategoryContext'

export default function ProductsCategory() {

    const { categories } = useContext(productsCategoryContext)
    return (
        <>
            {categories.map(category => (
                <Link className='text-decoration-none' to={`/shop/${category.id}`}>
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
