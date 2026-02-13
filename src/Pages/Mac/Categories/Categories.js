import React, {useContext, useState} from 'react'
import './Categories.css'
// import productsContext from '../../../Contexts/productsContext'
import { macPageProducts } from '../../../Datas'

export default function Categories({ onSelect = () => {} }) {
    // const { macProducts } = useContext(productsContext)
    const [active, setActive] = useState('All Products')
    let categories = ['All Products', ...new Set(macPageProducts.map(product => product.category))]

    const handleClick = (category) => {
        setActive(category)
        onSelect(category)
    }

    return (
        <div className="categoriesBar py-2 px-1">
            {categories.map(category => (
                <button
                    key={category}
                    className={`categoryBtn btn fw-semibold rounded-pill px-3 py-1 ${active === category ? 'active' : ''}`}
                    aria-pressed={active === category}
                    onClick={() => handleClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}
