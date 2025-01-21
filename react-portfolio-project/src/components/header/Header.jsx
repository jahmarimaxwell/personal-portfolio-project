import { NavLink } from "react-router-dom";

export default function Heading() {
    return (
        <>
            <ul className="nav-bar-container">
                <h2 className="site-title"><NavLink to='/'>Jahmari's Portfolio</NavLink></h2>
                <div className="nav-link-container">
                    <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
                </div>
            </ul>
        </>
    )
}