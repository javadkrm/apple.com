import React, { useEffect, useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import "./ScrollSlider.css";
import productsContext from "../../Contexts/productsContext";

export default function AutoScrollSlider() {
    const { scrollDatas } = useContext(productsContext);

    const sliderRef = useRef(null);
    // hovered index to control blur of other items
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // pixels per second speed used inside RAF loop
    const speedRef = useRef(60); // normal speed: 60px/s
    const lastTimeRef = useRef(null);

    const list = [...scrollDatas, ...scrollDatas];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let rafId;
        lastTimeRef.current = null;

        const step = (time) => {
            if (!lastTimeRef.current) lastTimeRef.current = time;
            const delta = time - lastTimeRef.current;
            lastTimeRef.current = time;

            // if content isn't scrollable, still keep RAF running
            const moveBy = (speedRef.current * delta) / 1000; // pixels to move this frame

            if (slider.scrollWidth > slider.clientWidth) {
                slider.scrollLeft += moveBy;

                // seamless loop when reaching half (duplicated list)
                const half = slider.scrollWidth / 2;
                if (slider.scrollLeft >= half) {
                    // subtract half to keep the continuous scroll position
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
        speedRef.current = 12; // slow down to 12px/s
    };

    const handleItemLeave = () => {
        setHoveredIndex(null);
        speedRef.current = 60; // resume normal speed
    };

    return (
        <div className="sliderWrapper" ref={sliderRef}>
            {list.map((item, idx) => {
                const originalIdx = idx < scrollDatas.length ? idx : idx - scrollDatas.length;
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
