import { useEffect, useRef } from 'react'
import { ReactComponent as Learning } from './svg/learning.svg';
import gsap from 'gsap'


const Img = () => {
    const wrapper = useRef(null);
    useEffect(() => {
        const [elements] = wrapper.current.children;
        const woman = elements.getElementById('woman');
        const chair = elements.getElementById('chair');
        const flower = elements.getElementById('flower');
        const square1 = elements.getElementById('square1');
        const square2 = elements.getElementById('square2');
        const square3 = elements.getElementById('square3');
        const book1 = elements.getElementById('book1');
        const book2 = elements.getElementById('book2');
        const book3 = elements.getElementById('book3');
        const man = elements.getElementById('man');

        gsap.set([elements], { autoAlpha: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'Sine.easeOut', duration: .6 } })

        tl.fromTo(elements, {x: '+=100', autoAlpha: 0 }, { x: '-=100', autoAlpha: 1, duration: .3 })
        .fromTo(chair, { autoAlpha: 0, y: '-=200' }, { y: '+=200', autoAlpha: 1, duration: .4 })
        .fromTo(woman, { autoAlpha: 0, y: '-=200' }, { y: '+=200', autoAlpha: 1, duration: .7 }, .7)
        .fromTo(flower, { autoAlpha: 0, x: '-=200' }, { x: '+=200', autoAlpha: 1, duration: .9 }, .3)
        .fromTo(square1, { autoAlpha: 0 }, { autoAlpha: 1, rotation: 360, transformOrigin: "left 50%", duration: .8 }, .3)
        .fromTo(square2, { autoAlpha: 0 }, { autoAlpha: 1, rotation: 360, transformOrigin: "right 50%", duration: .8 }, .8)
        .fromTo(square3, { autoAlpha: 0 }, { autoAlpha: 1, rotation: 360, transformOrigin: "top 50%", duration: .8 }, 1.1)
        .fromTo(book2, { autoAlpha: 0, y: '-=150' }, { autoAlpha: 1, y: '+=150', duration: .8 }, .7)
        .fromTo(book1, { autoAlpha: 0, y: '-=150' }, { autoAlpha: 1, y: '+=150', duration: .7 }, 1.3)
        .fromTo(book3, { autoAlpha: 0, y: '-=110' }, { autoAlpha: 1, y: '+=110', duration: .6 }, .4)
        .fromTo(man, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1.7)
    })

    return(
    <div ref={wrapper}>
            <Learning />
    </div>
    );
}

export default Img;