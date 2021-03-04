import { useEffect, useRef } from 'react'
import { ReactComponent as CodeTyping } from './svg/codeTyping.svg';
import gsap from 'gsap'

const Img = () => {
    const wrapper = useRef(null);
    useEffect(() => {
        const [elements] = wrapper.current.children;
        const man = elements.getElementById('man');
        const woman = elements.getElementById('woman');
        const bracketleft = elements.getElementById('bracketleft');
        const bracketright = elements.getElementById('bracketright');


        const tl = gsap.timeline({ defaults: { ease: 'Sine.easeOut', duration: .6 } })

        tl.fromTo(man, {x: '-=130', autoAlpha: 0 }, { x: '+=130', autoAlpha: 1, duration: .7 })
        tl.fromTo(woman, {x: '+=130', autoAlpha: 0 }, { x: '-=130', autoAlpha: 1, duration: .7 }, 0.2)
        tl.fromTo(bracketleft, {x: '-=45', autoAlpha: 0 }, { x: '+=45', autoAlpha: 1, duration: .4 }, 0.5)
        tl.fromTo(bracketright, {x: '+=45', autoAlpha: 0 }, { x: '-=45', autoAlpha: 1, duration: .4 }, 0.8)
    })

    return(
    <div ref={wrapper}>
            <CodeTyping />
    </div>
    );
}

export default Img;