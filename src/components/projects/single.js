import {useRef} from 'react'
import gsap from 'gsap'
function Single(props){
    let project = useRef(null);

    const displayDetails = () => {
        const details = project.current.children[0];

        gsap.to(details, {autoAlpha: 1, duration: .3})
    }
    const hiddenDetails = () => {
        const details = project.current.children[0];

        gsap.to(details, {autoAlpha: 0, duration: .3})
    }

    return(
        <div className="projects__single" style={{ backgroundImage: 'url(' + props.img + ')' }}
            ref={project} onMouseEnter={displayDetails} onMouseLeave={hiddenDetails}>
                <div className="projects__details">
                    <h3>{props.title}</h3>
                    <div className="projects__links">
                        <a href={props.live}>Live</a>
                        <a href={props.github}>Github</a>
                    </div>
                </div>

        </div>

    );
}
export default Single;