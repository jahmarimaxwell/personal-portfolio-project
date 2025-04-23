import { NavLink } from "react-router-dom";

export default function Heading() {
    return (
        <>
            <ul className="nav-bar-container">
                <h2 className="nav-link"><NavLink to='/'>Jahmari's Portfolio</NavLink></h2>
                <h2 className="nav-link"><NavLink to='/about'>About</NavLink></h2>
                <h2 className="nav-link"><NavLink to='/new-page'>NewPage</NavLink></h2>
            </ul>
        </>
    )
}