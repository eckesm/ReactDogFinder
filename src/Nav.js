import {NavLink} from 'react-router-dom'
import './Nav.css'

const Nav=()=>{
    return(
        <nav className="Nav">
            <NavLink exact to='/dogs'>Home</NavLink>
            <NavLink exact to='/dogs/Whiskey'>Whiskey</NavLink>
            <NavLink exact to='/dogs/Duke'>Duke</NavLink>
            <NavLink exact to='/dogs/Perry'>Perry</NavLink>
            <NavLink exact to='/dogs/Tubby'>Tubby</NavLink>
        </nav>
    )
}

export default Nav