import { NavLink } from "react-router-dom";

export default function Heading() {
    return (
        <>
            <ul className="nav-bar-container">
                <h2 className="nav-link"><NavLink to='/'>Jahmari's Portfolio</NavLink></h2>
                <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
            </ul>
        </>
    )
}