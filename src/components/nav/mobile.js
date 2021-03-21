const Mobilenav = (props) => {
    const closeMenu = () => {
        setTimeout(() => {
            document.querySelector('.nav__mobile').classList.remove('nav__mobile--active');
        }, 350)
    }
    return(
        <div className="nav__mobile">
            <i className="nav__mobile--close fas fa-times" onClick={closeMenu}></i>
            <ul>
                <li onClick={() => { props.scrollToEl('.parallax'); closeMenu() }}>Home</li>
                <li onClick={() => { props.scrollToEl('.about'); closeMenu() }}>About me</li>
                <li onClick={() => { props.scrollToEl('.projects'); closeMenu() }}>Projects</li>
                <li onClick={() => { props.scrollToEl('.skills'); closeMenu() }}>Skills</li>
                <li onClick={() => { props.scrollToEl('.contact'); closeMenu() }}>Contact</li>
            </ul>
        </div>
    )
}

export default Mobilenav