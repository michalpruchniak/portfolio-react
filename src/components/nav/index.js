import React from 'react'

function Nav(props) {
    return(
        <nav className="main__nav">
            <ul>
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