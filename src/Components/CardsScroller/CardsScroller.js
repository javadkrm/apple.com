import React from 'react'
import './CardsScroller.css'
import { Link } from 'react-router-dom'
import { scrollCardDatas } from '../../Datas'


export default function CardsScroller() {
    const  scrollCards  = scrollCardDatas
    return (
        <>
            {
                scrollCards.map(card => (
                    <Link key={card.id} to={`/shop/${card.id}`} className="cardLink me-4">
                        <div className="appleCard">

                            <div className="appleCardContent">
                                <h2 className="appleCardTitle">{card.title}</h2>

                                <span className="appleCardBadge">Apple Intelligence</span>

                                <p className="appleCardPrice">
                                    {card.price}
                                </p>
                            </div>

                            <div className="appleCardImage">
                                <img className="object-fit-contain" src={card.img} alt={card.title} />
                            </div>

                        </div>
                    </Link>
                ))
            }
        </>
    )
}
