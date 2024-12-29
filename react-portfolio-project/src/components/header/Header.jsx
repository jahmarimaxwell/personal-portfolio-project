import { NavLink } from "react-router-dom";

export default function Heading() {
    return (
        <>
        <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
        </>
    )
}