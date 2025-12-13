import React from 'react'
import './MacProducts.css'
import productsContext from '../../../Contexts/productsContext'
import { useContext } from 'react'

export default function MacProducts({ selectedCategory = 'All Products' }) {
    const { macProducts, userBagDatas, setUserBagDatas } = useContext(productsContext)
    const filtered = selectedCategory === 'All Products' ? macProducts : macProducts.filter(p => p.category === selectedCategory)

    const addToUserBag = (pro) => {
        setUserBagDatas(prevBag => {
            const isInUserBag = prevBag.some(product => product.id === pro.id)

            if (!isInUserBag) {
                return [
                    ...prevBag,
                    {
                        id: pro.id,
                        title: pro.title,
                        img: pro.img,
                        price: pro.price,
                        count: 1
                    }
                ]
            } else {
                return prevBag.map(product =>
                    product.id === pro.id
                        ? { ...product, count: product.count + 1 }
                        : product
                )
            }
        })
    }

    return (
        <>
            {filtered.map(product => (
                <div key={product.id} className='col-12 col-md-4 col-lg-3 mb-4'>
                    <div className='macProductCard d-flex flex-column align-items-center text-center p-3'>
                        <img src={product.img} alt={product.title} className='macProductImg mb-3' />
                        <h5 className='macProductTitle mb-2'>{product.title}</h5>
                        <span className='macProductPrice fw-semibold'>{product.price}</span>
                        <div className='productButtons d-flex gap-2 mt-3'>
                            <button className='btn btn-primary rounded-pill'>Learn More</button>
                            <button className='btn btn-outline-primary rounded-pill' onClick={() => {
                                addToUserBag(product)
                            }}>Buy</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
