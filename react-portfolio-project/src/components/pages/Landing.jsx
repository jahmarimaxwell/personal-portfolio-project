import React, { useState, useEffect, useRef } from "react";
import TiltContainer from "../stylish/TiltContainer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingPage() {
    const [showScroll, setShowScroll] = useState(false);
    const [scrollLocked, setScrollLocked] = useState(true);
    const [showInfo, setShowInfo] = useState({
        randomUser: false,
        marvelWorld: false,
        runningGame: false,
        palettePicker: false,
    });

    
    const sectionScrollRef = useRef(null);

   // Lock/unlock scroll when state changes
  useEffect(() => {
    document.body.style.overflow = scrollLocked ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollLocked]);

  // Scroll to projects and unlock scroll
  const scrollToProjects = () => {
    setScrollLocked(false);
    sectionScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to top
  const scrollToTop = () => {
  // Temporarily disable scroll lock while scrolling up
  setScrollLocked(true);

  window.scrollTo({ top: 0, behavior: "smooth" });
};

  // Prevent scrolling back above project section
  useEffect(() => {
    if (!scrollLocked) {
      const handleScrollLock = () => {
        const projectsTop = sectionScrollRef.current?.offsetTop || 0;
        if (window.scrollY < projectsTop - 50) {
          window.scrollTo({ top: projectsTop, behavior: "smooth" });
        }
      };
      window.addEventListener("scroll", handleScrollLock);
      return () => window.removeEventListener("scroll", handleScrollLock);
    }
  }, [scrollLocked]);

  // Show scroll-to-top button after scrolling down a bit
  useEffect(() => {
    const handleScrollButton = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScrollButton);
    return () => window.removeEventListener("scroll", handleScrollButton);
  }, []);

  // Re-lock scroll automatically once the user scrolls to the very top
  useEffect(() => {
    const handleScrollRelock = () => {
      if (window.scrollY <= 5) {
        setScrollLocked(true);
      }
    };
    window.addEventListener("scroll", handleScrollRelock);
    return () => window.removeEventListener("scroll", handleScrollRelock);
  }, []);

    // Toggle visibility for each info section independently
    const toggleInfo = (section) => {
        setShowInfo((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <> 
        <div className="intro-words-container">
            <h4 className="intro-words"> 
                {/* <strong className="arrow">↓</strong> Scroll Down <strong className="arrow">↓</strong>  */}
            </h4>
            {/* <h3 className="intro-words">Carousel Coming Soon!</h3> */}
        </div>
        {/* <div className="intro-container-holder"> */}
            <div className="intro-container">
                {/* <div className="slider-container">
                    <Slider className="slider" {...settings}>
                        <div className="slider-item1"> */}
                            {/* <img src="/personal-portfolio-project/sample-pictures/Galaxy.jpg"></img> */}
                            {/* Sample
                        </div>
                        <div className="slider-item2">
                            For
                        </div>
                        <div className="slider-item3">
                            Carousel
                        </div>
                    </Slider>
                </div> */}

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
                    <div className="information">
                        <strong><h2 className="project-title">Random User Generator App</h2></strong>
                        <p className={`info-text ${showInfo.randomUser ? "visible" : "hidden"}`}>
                            This app demonstrates the use of an API.
                            Once refreshed, it grabs random information 
                            (email, phone number, address)
                            and displays it.
                        </p>
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
                    <div className="information">
                        <strong><h2 className="project-title">Marvel World</h2></strong>
                        <p className={`info-text ${showInfo.marvelWorld ? "visible" : "hidden"}`}>
                            This App demonstrates the use of React 
                            and the Marvel API.
                            It allows you to search for any Marvel
                            character and display their image,
                            as well as their description. It also allows you
                            to see which comic issue they appear in.
                        </p>
                    </div>

                    <button className="toggle-button" onClick={() => toggleInfo("marvelWorld")}>
                        {showInfo.marvelWorld ? "Hide Info" : "Show Info"}
                    </button>
                </div>
            </div>

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
                    <div className="information">
                        <strong><h2 className="project-title">The Running Game</h2></strong>
                        <p className={`info-text ${showInfo.runningGame ? "visible" : "hidden"}`}>
                            A 2D Platformer aimed to replicate  
                            old Flash Player games. This was my 
                            first attempt at building a game.
                        </p>
                    </div>

                    <button className="toggle-button" onClick={() => toggleInfo("runningGame")}>
                        {showInfo.runningGame ? "Hide Info" : "Show Info"}
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
                        <p className={`info-text ${showInfo.palettePicker ? "visible" : "hidden"}`}>
                            Palette Picker lets you create a palette of 3 colors and 
                            copy the hex code of colors on the palette.
                        </p>
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
