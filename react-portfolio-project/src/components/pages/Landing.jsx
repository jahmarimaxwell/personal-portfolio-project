export default function LandingPage() {
    {/* UseState goes here */}
return (
    <>
        <h3>Coming soon!</h3>
      {/* Display Container */}
      <div className="intro-div">

      </div>
      <div className="display-container-left">
            <div className="picture-div">
                <img className="picture" src="\src\gifs\Random User Generator App.gif"></img>
            </div>
            <div className="content">
                <p className="information">
                {/* title goes here */}{/* line breaks make space for div */}
                <strong><h2 className="project-title">Random User Generator App</h2></strong><br />
                This app demonstrates the use of an API<br />
                Once refreshed, it grabs random information<br /> 
                (email, phone number, address)<br />
                And displays it
                </p>
                <button className="landing-button">
                    <a href="https://mls-dreammakers.github.io/random-users-app/">
                        Click to view
                    </a>
                </button>
            </div>
      </div>
      <div className="display-container-right">
        <div className="content">
            <p className="information">
               {/* title goes here */}{/* line breaks make space for div */}
               <strong><h2 className="project-title">Marvel World</h2></strong><br />
               This App demonstrates the use of <strong>React</strong><br />
               and the <strong>Marvel API</strong><br />
                It allows you to search for any Marvel<br /> 
               character and display their image,<br />
               as well their description. It also allows you <br />
               to be able to see which comic issue < br /> 
               they appear in
            </p>
            <button className="landing-button">
                <a href="https://github.com/React-API-Project/marvel-comic-react-project">
                    Click to view
                </a>
            </button>
        </div>
        <div className="picture-div">
             <img className="picture" src="\src\gifs\Marvel React API.gif"></img>
        </div>
      </div>
      <div className="display-container-left">
            <div className="picture-div">
                <div className="picture">
                
                </div>
            </div>
            <p className="information">
                This is information for the picture.<br />
                Sample Picture.
             </p>
      </div>
    </>
    )
}