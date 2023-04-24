import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
<nav>
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
    </ul>
    <ul>
        <li>
            <NavLink to = '/about'>About</NavLink>
        </li>
    </ul>
    <ul>
        <li>
            <NavLink to = '/Contact'>Contact</NavLink>
        </li>
    </ul>
</nav>

    )
}

export default Navbar;