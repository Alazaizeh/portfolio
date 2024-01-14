import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faGoogle
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faLayerGroup,
  faBars,
  faClose,
  faAddressCard,
  faLaptopCode,
  faMessage
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      {/* <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
       </Link> */}
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faAddressCard} color="#4d4d4e" />
        </NavLink>
        {/* <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink> */}
        <NavLink
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faLayerGroup} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="technologies-link"
          to="/technologies"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faMessage} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ed1c24"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
      <li>
          <a
            href="mailto:o.alazaizehh@gmail.com"
            rel="alazaizeh"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
              className="mail-anchor-icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/o-alazaizeh/"
            target="_blank"
            rel="alazaizeh"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="li-anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/alazaizeh"
            target="_blank"
            rel="alazaizeh"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="git-anchor-icon"
            />
          </a>
        </li>
        
 
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ed1c24"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
