import React, { useEffect, useRef, useState } from "react";

export default function TiltContainer({ children }) {
    const containerRef = useRef(null);
    const [ready, setReady] = useState(false);

    // Wait until images inside are loaded
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const imgs = el.querySelectorAll("img");

        if (imgs.length === 0) {
            setReady(true);
            return;
        }

        let loaded = 0;

        imgs.forEach((img) => {
            if (img.complete) {
                loaded++;
                if (loaded === imgs.length) setReady(true);
            } else {
                img.onload = () => {
                    loaded++;
                    if (loaded === imgs.length) setReady(true);
                };
            }
        });
    }, []);

    useEffect(() => {
        if (!ready) return;

        const el = containerRef.current;
        if (!el) return;

        let animationFrame = null;
        let isTouching = false;

        const calculateTilt = (clientX, clientY, sensitivity) => {
            const rect = el.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            const xVal = clientX - rect.left;
            const yVal = clientY - rect.top;

            const yRotation = sensitivity * ((xVal - width / 2) / width);
            const xRotation = -sensitivity * ((yVal - height / 2) / height);

            cancelAnimationFrame(animationFrame);

            animationFrame = requestAnimationFrame(() => {
                el.style.transform = `
                    perspective(600px)
                    scale(1.05)
                    rotateX(${xRotation}deg)
                    rotateY(${yRotation}deg)
                `;
            });
        };

        const startInteraction = () => {
            isTouching = true;
            el.style.transition = "none";
            el.style.transform =
                "perspective(600px) scale(0.95) rotateX(0deg) rotateY(0deg)";
        };

        const resetTransform = () => {
            isTouching = false;
            el.style.transition = "transform 0.3s ease";
            el.style.transform =
                "perspective(600px) scale(1) rotateX(0deg) rotateY(0deg)";
        };

        // 🖱 Desktop
        const handleMouseMove = (e) => {
            calculateTilt(e.clientX, e.clientY, 20);
        };

        const handleMouseLeave = () => {
            resetTransform();
        };

        // 📱 Mobile
        const handleTouchMove = (e) => {
            if (!isTouching) return;
            const touch = e.touches[0];
            calculateTilt(touch.clientX, touch.clientY, 40);
        };

        const handleTouchEndGlobal = () => {
            if (isTouching) {
                resetTransform();
            }
        };

        // Desktop listeners
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);
        el.addEventListener("mousedown", startInteraction);
        el.addEventListener("mouseup", resetTransform);

        // Mobile listeners
        el.addEventListener("touchstart", startInteraction, { passive: true });
        el.addEventListener("touchmove", handleTouchMove, { passive: true });

        // Global touch end (prevents stuck state)
        window.addEventListener("touchend", handleTouchEndGlobal);
        window.addEventListener("touchcancel", handleTouchEndGlobal);

        return () => {
            cancelAnimationFrame(animationFrame);

            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
            el.removeEventListener("mousedown", startInteraction);
            el.removeEventListener("mouseup", resetTransform);

            el.removeEventListener("touchstart", startInteraction);
            el.removeEventListener("touchmove", handleTouchMove);

            window.removeEventListener("touchend", handleTouchEndGlobal);
            window.removeEventListener("touchcancel", handleTouchEndGlobal);

            el.style.transform = "none";
        };
    }, [ready]);

    return (
        <div ref={containerRef} className="tilt-container">
            {children}
        </div>
    );
}
