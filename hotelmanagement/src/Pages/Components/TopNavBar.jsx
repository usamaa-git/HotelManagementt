import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel } from "@fortawesome/free-solid-svg-icons"

export const TopNavBar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
         <span className='logo'>
         <span className="logoicon"><FontAwesomeIcon icon={faHotel}/></span>
         Hotelbooking
         </span>
         <div className='navItems'>
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
         </div>
      </div>
    </div>
  )
}
