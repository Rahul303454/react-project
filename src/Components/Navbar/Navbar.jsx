import './navbar.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className="navLogo">
        EV-olution
      </div>

      <ul className="nav_menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav_contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
