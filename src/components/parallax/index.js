import bg from './img/bg.jpeg'
import planet from './img/planet.png'
import claud from './img/claud.png'
import jet from './img/jet.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useEffect } from 'react'
function Parallax(){

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#bg", {
            scrollTrigger: {
                scrub: true
            },
            y: 200,
            scale: 1.5
        })

        gsap.to("#planet", {
            scrollTrigger: {
                scrub: true,

            },
            x: -400
        })
        gsap.to("#claud1", {
            scrollTrigger: {
                scrub: true,

            },
            x: -600
        })
        gsap.to("#claud2", {
            scrollTrigger: {
                scrub: true,

            },
            x: 500
        })
        gsap.to("#jet", {
            scrollTrigger: {
                scrub: true,

            },
            x: -1500,
            y: 4000,
            scale: 6
        })
    })
    return(
        <section className="parallax">
            <img src={bg} id="bg" />
            <img src={planet} id="planet"/>
            <img src={claud} id="claud1" />
            <img src={claud} id="claud2" />
            <img src={jet} id="jet" />
        </section>
    );
}

export default Parallax;