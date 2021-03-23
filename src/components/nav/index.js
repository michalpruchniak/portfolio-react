import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Nav(props) {
    const openMenu = () => {
        document.querySelector('.nav__mobile').classList.add("nav__mobile--active")
    }
    return(
        <nav className={`main__nav ${props.mainmenu ? "main__nav--active" : ""}`}>
            <span className="nav__hamburger" onClick={openMenu}><FontAwesomeIcon icon={faBars} /></span>
            <ul className="nav__classic">
                <li onClick={() => { props.scrollToEl('.parallax')}}>Home</li>
                <li onClick={() => { props.scrollToEl('.about')}}>About me</li>
                <li onClick={() => { props.scrollToEl('.projects')}}>Projects</li>
                <li onClick={() => { props.scrollToEl('.skills')}}>Skills</li>
                <li onClick={() => { props.scrollToEl('.contact')}}>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;