import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Mobilenav = (props) => {
    const closeMenu = () => {
        setTimeout(() => {
            document.querySelector('.nav__mobile').classList.remove('nav__mobile--active');
        }, 350)
    }
    return(
        <div className="nav__mobile">
            <span className="nav__mobile--close"><FontAwesomeIcon icon={faTimes} onClick={closeMenu} /></span>
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