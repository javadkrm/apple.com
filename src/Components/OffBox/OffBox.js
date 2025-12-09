import React from 'react'
import './OffBox.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";

export default function OffBox() {
    return (
            <div className='OffBoxContainer'>
                <div className='offBoxText'>
                    Pay monthly at 0% APR when you choose to check out at Apple with Apple Card Monthly Installments.◊
                    <Link className='text-decoration-none' to={'/more'}> Learn More <FaAngleRight />  </Link>
                </div>
            </div>
    )
}
