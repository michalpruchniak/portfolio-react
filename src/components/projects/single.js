import {useRef} from 'react'
import gsap from 'gsap'
function Single(props){
    const wrapper = useRef(null);

    const mouseEnter = () => {
        const shadow = wrapper.current.querySelector(".projects__single--shadow");
        const links = shadow.querySelectorAll('a');
        const tl = gsap.timeline({})
        tl.to(shadow, { width: '100%', height: '100%', ease: "bounce.out"})
        tl.fromTo(links, { y: '-=50', autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: .3, duration: .2, ease: 'easeInOut' })
    }
    const mouseLeave = () => {
        const shadow = wrapper.current.querySelector(".projects__single--shadow");
        const links = shadow.querySelectorAll('a');
        const tl = gsap.timeline({})
        tl.to(links, { y: '-=50', autoAlpha: 0, stagger: .3, duration: .2, ease: 'easeInOut' })

        tl.to(shadow, {width: '0', height: '0', ease: 'easeInOut'})
    }
    return(
        <div className="projects__single"
             style={{ backgroundImage: 'url("' +props.img+ '")' }}
             ref={wrapper}
             onMouseEnter={mouseEnter}
             onMouseLeave={mouseLeave}
        >
            <div className="projects__single--shadow">
                <a href="#">Github</a>
                <a href="#">Live</a>
            </div>

        </div>
    );
}

export default Single;