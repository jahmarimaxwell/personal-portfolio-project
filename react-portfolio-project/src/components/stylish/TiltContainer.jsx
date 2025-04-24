import React, { useEffect, useRef, useState } from "react";

export default function TiltContainer({ children }) {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen size on load
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 480px)").matches);
        };

        checkMobile(); // Initial check
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    useEffect(() => {
        if (isMobile) return; // Skip tilt behavior on mobile

        const el = containerRef.current;
        if (!el) return;

        const height = el.clientHeight;
        const width = el.clientWidth;

        const handleMove = (e) => {
            const xVal = e.layerX;
            const yVal = e.layerY;
            const yRotation = 20 * ((xVal - width / 2) / width);
            const xRotation = -20 * ((yVal - height / 2) / height);
            el.style.transform = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        };

        const resetTransform = () => {
            el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
        };

        const clickTransform = () => {
            el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
        };

        const releaseTransform = () => {
            el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
        };

        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseout", resetTransform);
        el.addEventListener("mousedown", clickTransform);
        el.addEventListener("mouseup", releaseTransform);

        return () => {
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseout", resetTransform);
            el.removeEventListener("mousedown", clickTransform);
            el.removeEventListener("mouseup", releaseTransform);
        };
    }, [isMobile]);

    return (
        <div
            ref={containerRef}
            className="tilt-container"
            style={{ transform: isMobile ? "none" : undefined }}
        >
            {children}
        </div>
    );
}
