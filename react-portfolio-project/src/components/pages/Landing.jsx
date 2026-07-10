import React, { useState, useEffect, useRef } from "react";
import TiltContainer from "../stylish/TiltContainer.jsx";

export default function LandingPage() {
const [showScroll, setShowScroll] = useState(false);
const [scrollLocked, setScrollLocked] = useState(true);
const [returningHome, setReturningHome] = useState(false);

const [showInfo, setShowInfo] = useState({
  randomUser: false,
  marvelWorld: false,
  runningGame: false,
  palettePicker: false,
});

const sectionScrollRef = useRef(null);

// Run once when the page loads
useEffect(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  return () => {
    window.history.scrollRestoration = "auto";
  };
}, []);

// Lock/unlock scrolling
useEffect(() => {
  const overflow = scrollLocked ? "hidden" : "auto";

  document.body.style.overflow = overflow;
  document.documentElement.style.overflow = overflow;

  return () => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  };
}, [scrollLocked]);

// Scroll down to projects
const scrollToProjects = () => {
  setScrollLocked(false);

  requestAnimationFrame(() => {
    sectionScrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};

// Scroll back to the hero
const scrollToTop = () => {
  setReturningHome(true);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Handle scrolling behavior
useEffect(() => {
  const handleScroll = () => {
    const projectsTop = sectionScrollRef.current?.offsetTop ?? 0;

    // Show/hide scroll-to-top button
    setShowScroll(window.scrollY > 300);

    // Prevent manual scrolling above projects
    if (
      !scrollLocked &&
      !returningHome &&
      window.scrollY < projectsTop - 10
    ) {
      window.scrollTo({
        top: projectsTop,
        behavior: "auto",
      });
      return;
    }

    // Finished returning home
    if (returningHome && window.scrollY <= 5) {
      setScrollLocked(true);
      setReturningHome(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [scrollLocked, returningHome]);

    // Toggle visibility for each info section independently
    const toggleInfo = (section) => {
        setShowInfo((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <> 
        <div className="intro-words-container">
            <h4 className="intro-words"> 
                {/* <strong className="arrow">↓</strong> Scroll Down <strong className="arrow">↓</strong>  */}
            </h4>
        </div>
            <div className="intro-container">

                <div className="project-section-container">
                    <div className="project-heading">
                        <h1 className="projects">Projects</h1>
                    </div>
                    <div className="project-button-container">
                        <button className="project-button" onClick={scrollToProjects}>
                            Tap to View Projects
                        </button>
                    </div>
                    <h2 className="clickformore">Click the image of each project below to view them</h2>
                </div>
            </div>
        {/* </div> */}
        
        <div className="section-scroll" ref={sectionScrollRef}>
            {/* Running Game */}
            <div className="display-container">
                <TiltContainer>
                <a href="https://drive.google.com/file/d/1Qzym1NTBll5FZClSGWCehICZ-Urb71Ah/view?usp=drive_link">
                    <div className="picture-div">
                        <img className="picture" tabindex="0" src="/personal-portfolio-project/gifs/The-Running-Game.gif" alt="The Running Game"/>
                    </div>
                </a>
                </TiltContainer>

                <div className="content">
                    <p className="running-game-lead"><strong>Download for Mac (v1.0)</strong></p>
                    <strong><h2 className="project-title">The Running Game</h2></strong> 
                    <div className="information">
                    <strong>
                        <p className={`info-text ${showInfo.runningGame ? "visible" : "hidden"}`}>
                            A 2D Platformer aimed to replicate  
                            old Flash Player games. This was my 
                            first attempt at building a game.
                        </p>
                    </strong>   
                    </div>

                    <button className="toggle-button" onClick={() => toggleInfo("runningGame")}>
                        {showInfo.runningGame ? "Hide Info" : "Show Info"}
                    </button>
                </div>
            </div>

            {/* Random User Generator App */}
            <div className="display-container"> 
                <TiltContainer>
                <a href="https://mls-dreammakers.github.io/random-users-app/">      
                    <div className="picture-div"> 
                        <img className="picture" tabindex="0" src="/personal-portfolio-project/gifs/Random-User-Generator-App.gif" alt="Random User Generator App"/>
                    </div>
                </a>
                </TiltContainer>

                <div className="content">
                    <strong><h2 className="project-title">Random User Generator App</h2></strong>
                    <div className="information">
                    <strong>   
                        <p className={`info-text ${showInfo.randomUser ? "visible" : "hidden"}`}>
                            This app demonstrates the use of an API.
                            Once refreshed, it grabs random information 
                            (email, phone number, address)
                            and displays it.
                        </p>
                    </strong>   
                    </div>

                    <button className="toggle-button" onClick={() => toggleInfo("randomUser")}>
                        {showInfo.randomUser ? "Hide Info" : "Show Info"}
                    </button>
                    
                </div>
            </div>
            

            {/* Marvel World App */}
            <div className="display-container">
                <TiltContainer>
                <a href="https://react-api-project.github.io/marvel-comic-react-project/">
                    <div className="picture-div">
                        <img className="picture" tabindex="0" src="/personal-portfolio-project/gifs/Marvel-React-API.gif" alt="Marvel React API"/>
                    </div>
                </a>
                </TiltContainer>

                <div className="content">
                    <strong><h2 className="project-title">Marvel World</h2></strong>
                    <div className="information">
                    <strong>   
                        <p className={`info-text ${showInfo.marvelWorld ? "visible" : "hidden"}`}>
                            This App demonstrates the use of React 
                            and the Marvel API.
                            It allows you to search for any Marvel
                            character and display their image,
                            as well as their description. It also allows you
                            to see which comic issue they appear in.
                        </p>
                    </strong>   
                    </div>

                    <button className="toggle-button" onClick={() => toggleInfo("marvelWorld")}>
                        {showInfo.marvelWorld ? "Hide Info" : "Show Info"}
                    </button>
                </div>
            </div>
            
            {/* Palette Picker */} 
            <div className="display-container">
                <TiltContainer>
                <a href="https://jahmarimaxwell.github.io/palette-picker/">
                    <div className="picture-div"> 
                        <img className="picture" tabindex="0" src="/personal-portfolio-project/pictures/Palette-picker.png" alt="Palette Picker"/>
                    </div>
                </a>
                </TiltContainer>

                <div className="content">
                    <div className="information">
                        <strong><h2 className="project-title">Palette Picker</h2></strong>
                        <strong>   
                        <p className={`info-text ${showInfo.palettePicker ? "visible" : "hidden"}`}>
                            Palette Picker lets you create a palette of 3 colors and 
                            copy the hex code of colors on the palette.
                        </p>
                        </strong>   
                    </div>

                    <button className="toggle-button" onClick={() => toggleInfo("palettePicker")}>
                        {showInfo.palettePicker ? "Hide Info" : "Show Info"}
                    </button>
                </div>
            </div>
        </div>

            {/* Scroll-to-Top Button */}
            {showScroll && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </>
    );
}
