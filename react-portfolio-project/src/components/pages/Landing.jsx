import React, { useState, useEffect } from "react";

export default function LandingPage() {
    const [showScroll, setShowScroll] = useState(false);
    const [showInfo, setShowInfo] = useState({
        randomUser: false,
        marvelWorld: false,
        runningGame: false,
    });

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

    // Toggle visibility for each info section independently
    const toggleInfo = (section) => {
        setShowInfo((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <>
            <div className="intro-container">
                <h4 className="intro-words">Scroll Down</h4>
                <h3 className="intro-words">Carousel Coming soon!</h3>
                <div className="intro-div"></div>
            </div>

            {/* Random User Generator App */}
            <div className="display-container-black">
                <div className="picture-div">
                    <img className="picture" src="/personal-portfolio-project/gifs/Random-User-Generator-App.gif" alt="Random User Generator App"/>
                </div>

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

                    <button className="landing-button">
                        <a href="https://mls-dreammakers.github.io/random-users-app/">
                            Click to view
                        </a>
                    </button>
                </div>
            </div>

            {/* Marvel World App */}
            <div className="display-container-gray">
                <div className="picture-div">
                    <img className="picture" src="/personal-portfolio-project/gifs/Marvel-React-API.gif" alt="Marvel React API"/>
                </div>

                <div className="content">
                    <div className="information">
                        <strong><h2 className="project-title">Marvel World</h2></strong>
                        <p className={`info-text ${showInfo.marvelWorld ? "visible" : "hidden"}`}>
                            This App demonstrates the use of <strong>React </strong>
                            and the <strong>Marvel API</strong>.
                            It allows you to search for any Marvel
                            character and display their image,
                            as well as their description. It also allows you
                            to see which comic issue they appear in.
                        </p>
                    </div>

                    <button className="toggle-button" onClick={() => toggleInfo("marvelWorld")}>
                        {showInfo.marvelWorld ? "Hide Info" : "Show Info"}
                    </button>

                    <button className="landing-button">
                        <a href="https://github.com/React-API-Project/marvel-comic-react-project">
                            Click to view
                        </a>
                    </button>
                </div>
            </div>

            {/* Running Game */}
            <div className="display-container-black">
                <div className="picture-div">
                    <img className="picture" src="/personal-portfolio-project/gifs/The-Running-Game.gif" alt="The Running Game"/>
                </div>

                <div className="content">
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

                    <a href="../program/running_game.zip" download="running_game.zip">
                        <button className="landing-button">
                            Download File
                        </button>
                    </a>
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
