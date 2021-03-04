import html5 from './svg/html5.svg'
import css3 from './svg/css3.svg'
import javascript from './svg/javascript.svg'
import react from './svg/react.svg'
import redux from './svg/redux.svg'
import bootstrap from './svg/bootstrap.svg'
import sass from './svg/sass.svg'

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
            <img src={html5} alt="html5"/>
            <img src={css3} alt="css3" />
            <img src={javascript} alt="javascript"/>
            <img src={bootstrap} alt="bootstrap"/>
            <img src={sass} alt="sass" />
            <img src={react} alt="react" />
            <img src={redux} alt="redux" />
        </div>
    );
}

export default Skills;