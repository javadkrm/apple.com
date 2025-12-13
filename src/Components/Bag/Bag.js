import React, { useContext, useEffect } from 'react'
import './Bag.css'
import productsContext from '../../Contexts/productsContext'

export default function Bag({ isOpen = false, onClose = () => { } }) {
    const { userBagDatas, setUserBagDatas } = useContext(productsContext)
    useEffect(() => {
        if (!isOpen) return
        const onKey = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isOpen, onClose])

    const removeFromBag = (item) => {
        let updatedBag = userBagDatas.filter(product => product.id !== item.id)
        setUserBagDatas(updatedBag)
    }

    const totalPrice = userBagDatas.reduce((sum, item) => {
        const price = Number(item.price) || 0
        const count = Number(item.count) || 0
        return sum + price * count
    }, 0)
    return (
        <div>
            {isOpen && <div className="bagBackdrop" onClick={onClose} />}

            <aside className={`sidebar ${isOpen ? 'active' : ''}`} role="dialog" aria-modal="true" aria-label="Shopping bag">
                <button className="bagCloseBtn" aria-label="Close bag" onClick={onClose}>×</button>

                <h2 className='bagTitle text-center py-3 fw-bold'>Your Bag</h2>
                <p className='totalPrice fs-5 fw-semibold text-center mb-4'>
                    {`Total: $${totalPrice.toFixed(2)}`}
                </p>
                <div className='bagItemsContainer px-3'>
                    {userBagDatas.length === 0 ? (<p>Your Bag Is Empty</p>) : (
                        userBagDatas.map(item => (
                            <div
                                key={item.id}
                                className="bagItem d-flex justify-content-between align-items-center mb-3 p-2"
                            >
                                <div className="d-flex align-items-center">
                                    <img src={item.img} alt={item.title} className="bagItemImg me-3" />

                                    <div className="bagItemInfo">
                                        <h5 className="bagItemTitle mb-1">{item.title}</h5>

                                        <div className="d-flex flex-column text-secondary">
                                            <span className="bagItemPrice">{item.price} $</span>
                                            <span className="bagItemCount">Count: {item.count}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromBag(item)}
                                    className="btn btn-danger me-3"
                                >
                                    Remove
                                </button>
                            </div>

                        ))
                    )}
                </div>
            </aside>
        </div>
    )
}
