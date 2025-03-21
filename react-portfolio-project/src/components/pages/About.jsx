import htmlLogo from '../../assets/svg/html.svg'
import cssLogo from '../../assets/svg/css.svg'
import javascriptLogo from '../../assets/svg/javascript.svg'
import viteLogo from '../../assets/svg/vite.svg'


export default function About() {
    return (
    <>
        <div className="about-content">
            <img className="portrait" src="/personal-portfolio-project/Professional-Headshot.jpg"></img>
                <div className="description">
                    <div className="about-information">
                    This is my About page. This will be the page where I display my 
                    projects and more.<br /> There will be many more to come.
                    I'll be including my technologies down below:
                    </div>
                    <button className="github-link">
                        <a href="https://github.com/jahmarimaxwell">jahmarimaxwell</a>
                    </button>
                </div>
        </div>
        <div class="tech-stack">
        <p>Site created with: </p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                    <img src={htmlLogo} class="logo" alt="HTML logo"/>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                    <img src={cssLogo} class="logo" alt="CSS logo"/>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                    <img src={javascriptLogo} class="logo vanilla" alt="JavaScript logo" />
                </a>
                <a href="https://vitejs.dev" target="_blank">
                    <img src= {viteLogo} class="logo" alt="Vite logo"/>
                </a>              
         </div>
    </>
    )
}