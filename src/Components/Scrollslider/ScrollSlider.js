import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./ScrollSlider.css";
import { scrollSliderDatas } from "../../Datas";

export default function AutoScrollSlider() {

    const sliderRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const speedRef = useRef(60); 
    const lastTimeRef = useRef(null);

    const list = [...scrollSliderDatas, ...scrollSliderDatas];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let rafId;
        lastTimeRef.current = null;

        const step = (time) => {
            if (!lastTimeRef.current) lastTimeRef.current = time;
            const delta = time - lastTimeRef.current;
            lastTimeRef.current = time;
            const moveBy = (speedRef.current * delta) / 1000;

            if (slider.scrollWidth > slider.clientWidth) {
                slider.scrollLeft += moveBy;
                const half = slider.scrollWidth / 2;
                if (slider.scrollLeft >= half) {
                    slider.scrollLeft -= half;
                }
            }

            rafId = requestAnimationFrame(step);
        };

        rafId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(rafId);
    }, [list.length]);

    const handleItemEnter = (originalIdx) => {
        setHoveredIndex(originalIdx);
        speedRef.current = 12;
    };

    const handleItemLeave = () => {
        setHoveredIndex(null);
        speedRef.current = 60;
    };

    return (
        <div className="sliderWrapper" ref={sliderRef}>
            {list.map((item, idx) => {
                const originalIdx = idx < scrollSliderDatas.length ? idx : idx - scrollSliderDatas.length;
                const isBlurred = hoveredIndex !== null && hoveredIndex !== originalIdx;

                return (
                    <motion.div
                            key={idx}
                            className={`sliderItem ${isBlurred ? 'blurred' : ''}`}
                            onMouseEnter={() => handleItemEnter(originalIdx)}
                            onMouseLeave={handleItemLeave}
                            onTouchStart={() => handleItemEnter(originalIdx)}
                            onTouchEnd={handleItemLeave}
                            onTouchCancel={handleItemLeave}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        >
                        <img src={item.img} alt="" className="sliderImage" />

                        <div className="caption">
                            <p>{item.caption}</p>
                            <button className="watch-btn btn btn-light btn-sm">Watch Now</button>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
