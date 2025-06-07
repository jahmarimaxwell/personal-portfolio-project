import htmlLogo from '../../assets/svg/html.svg'
import cssLogo from '../../assets/svg/css.svg'
import javascriptLogo from '../../assets/svg/javascript.svg'
import viteLogo from '../../assets/svg/vite.svg'
import reactLogo from '../../assets/svg/react.svg'
import React, { useState, useEffect } from "react";
import TiltContainer from "../stylish/TiltContainer.jsx";

export default function About() {
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
                <div className="about-content">
                    <div className="portrait-holder">
                        <TiltContainer> 
                        <img className="portrait" src="/personal-portfolio-project/pictures/Professional-Headshot.jpg"></img>
                        </TiltContainer> 
                    </div>
          
                <div className="description">
                    <div className="information">
                        <strong className="arrow">↓</strong>Github Link Below<strong className="arrow">↓</strong>
                    </div>
                    <button className="github-link">
                        <a href="https://github.com/jahmarimaxwell">jahmarimaxwell</a>
                    </button>
                </div>
                   <div className="email"><strong>jahmarimaxwell@gmail.com</strong></div>
        </div>
        <div className="tech-stack">
        <p><strong>Proficient in</strong></p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                    <img src={htmlLogo} className="logo" alt="HTML logo"/>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                    <img src={cssLogo} className="logo" alt="CSS logo"/>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                    <img src={javascriptLogo} className="logo vanilla" alt="JavaScript logo" />
                </a>
                <a href="https://vitejs.dev" target="_blank">
                    <img src= {viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <img src= {reactLogo} className="logo" alt="React logo"/>                         
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