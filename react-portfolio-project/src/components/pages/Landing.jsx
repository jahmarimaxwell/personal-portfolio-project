export default function LandingPage() {
    {/* UseState goes here */}
return (
    <>
    <h1 className="site-title">Jahmari's Portfolio</h1>
      <h3>Coming soon!</h3>
      {/* Display Container */}
      <div className="intro-div">

      </div>
      <div className="display-container-left">
      <div className="picture-div">
        <a href="https://mls-dreammakers.github.io/random-users-app/">
            {/* <div className="picture"> */}
            <img className="picture" src="/src/pictures/Random User Generator.png">
            </img>
            {/* </div> */}
        </a>
        </div>
            <p className="information">
            {/* title goes here */}{/* line breaks make space for div */}
            Random User Generator App<br />
            This app demonstrates the use of an API<br />
            Once refreshed, it grabs random information<br /> 
            (email, phone number, address)<br />
            And displays it
             </p>
      </div>
      <div className="display-container-right">
            <p className="information">
               This is information for the picture.<br />
                Sample Picture.
            </p>
      <div className="picture-div">
        <a href="https://react-api-project.github.io/marvel-comic-react-project/">
            <img className="picture" src="/src/pictures/Marvel React API.png">
                
            </img>
        </a>
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