export default function LandingPage() {
    {/* UseState goes here */}
return (
    <>
    <div className="intro-container">
        <h3 className="intro-words">Coming soon!</h3>
        <h4 className="intro-words">Scroll Down</h4>
        {/* Display Container */}
        <div className="intro-div"></div>
     </div>
     
      <div className="display-container-black">
            <div className="picture-div">
                <img className="picture" src="/personal-portfolio-project/gifs/Random-User-Generator-App.gif"></img>
            </div>
            <div className="content">
                <div className="information">
                {/* title goes here */}{/* line breaks make space for div */}
                <strong><h2 className="project-title">Random User Generator App</h2></strong><br />
                This app demonstrates the use of an API
                Once refreshed, it grabs random information 
                (email, phone number, address)
                And displays it
                </div>
                <button className="landing-button">
                    <a href="https://mls-dreammakers.github.io/random-users-app/">
                        Click to view
                    </a>
                </button>
            </div>
      </div>
      <div className="display-container-gray">
        <div className="picture-div">
             <img className="picture" src="/personal-portfolio-project/gifs/Marvel-React-API.gif"></img>
        </div>
        <div className="content">
            <div className="information">
               {/* title goes here */}{/* line breaks make space for div */}
               <strong><h2 className="project-title">Marvel World</h2></strong><br />
               This App demonstrates the use of <strong> React </strong>
               and the <strong> Marvel API</strong>.
                It allows you to search for any Marvel
               character and display their image,
               as well their description. It also allows you
               to be able to see which comic issue
               they appear in
            </div>
            <button className="landing-button">
                <a href="https://github.com/React-API-Project/marvel-comic-react-project">
                    Click to view
                </a>
            </button>
        </div>
      </div>
      <div className="display-container-black">
            <div className="picture-div">
                <img className="picture" src="/personal-portfolio-project/gifs/The-Running-Game.gif"></img>
            </div>
           <div className="content">
                <div className="information">
                <strong><h2 className="project-title">The Running Game</h2></strong><br />
                    A 2D Platformer aimed to replicate  
                    old Flash Player games. This was my 
                    first attempt at building a game
                    Sample Picture.
                </div>
                <a href="../program/running_game.zip" download="running_game.zip">
                    <button className="landing-button">
                       Download File
                    </button>
                </a>
          </div>
      </div>
    </>
    )
}