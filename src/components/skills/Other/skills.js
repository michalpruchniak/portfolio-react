import Github from './svg/github.svg'


import { useEffect, useRef } from 'react';
import gsap from 'gsap'
const Skills = () => {
    const wrapper = useRef(null);

    useEffect(() => {
        const elements = wrapper.current.querySelectorAll('img');
        gsap.set(elements, { autoAlpha: 0 });
        gsap.fromTo(elements, { y: '-=50', autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: .3, duration: .5, ease: 'easeInOut' })


    })
    return(
        <div className="skills__icons" ref={wrapper}>
            <img src={Github} />
        </div>
    );
}

export default Skills;