import React, { useState, useEffect } from 'react'
import './Caruser.css'
import { Link } from 'react-router-dom'
import { moviesDatas } from '../../Datas'

export default function Caruser() {
    const  movies  = moviesDatas
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [movies.length])

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1))
    }

    const getItemClass = (index) => {
        if (index === activeIndex) return 'carousel-item-active'
        if (index === (activeIndex - 1 + movies.length) % movies.length) return 'carousel-item-prev'
        if (index === (activeIndex + 1) % movies.length) return 'carousel-item-next'
        return 'carousel-item-hidden'
    }

    return (
        <div className='caruserContainer'>
            <div className='carousel-wrapper'>
                <button className='carousel-btn carousel-btn-prev' onClick={handlePrev}>
                    <span>❮</span>
                </button>

                <div className='carousel-container'>
                    {movies.map((movie, index) => (
                        <Link
                            key={movie.id}
                            to={'/movies'}
                            className={`carousel-link ${getItemClass(index)}`}
                        >
                            <img src={movie.img} alt={movie.category} />
                            <div className='carousel-caption'>
                                <button className='btn btn-light rounded-pill py-2 px-3 border-1'>Stream now</button>
                                <span className='text-light fs-6 fw-normal'>
                                    <span className='movie-category text-light fs-4 fw-semibold'>{movie.category}</span> . {movie.desc}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <button className='carousel-btn carousel-btn-next' onClick={handleNext}>
                    <span>❯</span>
                </button>
            </div>

            <div className='carousel-indicators'>
                {movies.map((_, index) => (
                    <button
                        key={index}
                        className={`bg-secondary indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    )
}
