import React, { useState, useEffect } from "react";

export default function NewPage() {
      const [showScroll, setShowScroll] = useState(false);
    
        // Detect scroll position
        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 300) {
                    setShowScroll(true);
                } else {
                    setShowScroll(false);
                }
            };
    
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
        // Scroll back to top function
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    
    return (
            <>
            <div className="new-page-content">

            </div>

          {/* Scroll-to-Top Button */}
          {showScroll && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
    </>
    )
}