import { useEffect, useRef } from 'react'
import { ReactComponent as CodeThinking } from './svg/codeThinking.svg';
import gsap from 'gsap'

const Img = () => {
    const wrapper = useRef(null);
    useEffect(() => {
        const [elements] = wrapper.current.children;
        const person = elements.getElementById('person');
        const line1 = elements.getElementById('line1');
        const line2 = elements.getElementById('line2');
        const line3 = elements.getElementById('line3');
        const circle = elements.getElementById('circle');
        gsap.set([elements], { autoAlpha: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'Sine.easeOut', duration: .6 } })

        tl.fromTo(elements, {x: '+=100', autoAlpha: 0 }, { x: '-=100', autoAlpha: 1, duration: .9 })
        .fromTo(person, { autoAlpha: 0, x: '-=200' }, { x: '+=200', autoAlpha: 1, duration: .8 })
        .fromTo(line1, { width: '0' }, { width: '59.430492', duration: 0.8, ease: 'Power1.easeIn' }, 0.8)
        .fromTo(line2, { width: '0' }, { width: '59.430492', duration: 1.2, ease: 'Expo.easeIn' }, 0.4)
        .fromTo(line3, { width: '0' }, { width: '59.430492', duration: 1, ease: 'Power1.easeIn'} , 0.3)
        .fromTo(circle, { autoAlpha: 0, y: '-=20', x: '+=20' }, { y: '+=20', x: '-=20', autoAlpha: 1, duration: .7, } , 0.9)
    })

    return(
    <div ref={wrapper}>
            <CodeThinking />
    </div>
    );
}

export default Img;