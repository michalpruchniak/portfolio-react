import React from 'react'
import { useState } from 'react/cjs/react.development'

function Nav(props) {

    const openMenu = () => {
        document.querySelector('.nav__mobile').classList.add("nav__mobile--active")
    }
    return(
        <nav className={`main__nav ${props.mainmenu ? "main__nav--active" : ""}`}>
            <span className="nav__hamburger" onClick={openMenu}><i className="fas fa-bars"></i></span>
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