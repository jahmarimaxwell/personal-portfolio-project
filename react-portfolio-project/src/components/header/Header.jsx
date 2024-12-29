import { NavLink } from "react-router-dom";

export default function Heading() {
    return (
        <>
            <ul className="nav-bar-container">
                <li className="nav-link"><NavLink to='/'>Home</NavLink></li>
                <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
            </ul>
        </>
    )
}