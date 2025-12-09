import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ProductsCategory.css'
import productsContext from '../../Contexts/productsContext'

export default function ProductsCategory() {

    const { categoryDatas } = useContext(productsContext)
    return (
        <>
            {categoryDatas.map(category => (
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
