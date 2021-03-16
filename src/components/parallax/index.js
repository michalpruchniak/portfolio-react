import bg from './img/bg.jpeg'
import planet from './img/planet.png'
import claud from './img/claud.png'
import jet from './img/jet.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'


function Parallax(props){
    const wrapper = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        if(props.parallax == true){
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
                x: 900
            })
            gsap.to("#jet", {
                scrollTrigger: {
                    scrub: true,

                },
                x: -2500,
                y: 4000,
                scale: 2
            })
            gsap.to(".main__header", {duration: 2, delay: 1, text: "Michal Pruchniak"})
            gsap.to(".main__second", {duration: 3, delay: 3, text: "Front-end developer"})
        }
    }, [props.parallax])
    return(
        <section className="parallax">
            <div className="main__headers">
                <h1 className="main__header"></h1>
                <h2 className="main__second"></h2>
            </div>
            <img src={bg} id="bg" />
            <img src={planet} id="planet"/>
            <img src={claud} id="claud1" />
            <img src={claud} id="claud2" />
            <img src={jet} id="jet" />
        </section>
    );
}

export default Parallax;



