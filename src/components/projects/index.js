import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Single from './single'

import ewidencja1 from './img/ewidencja1.jpg'
import { Container } from 'react-grid-system';


function App(props) {
    const wrapper = useRef(null);
    useEffect(() => {
        if(props.projects === true){
            const elements = wrapper.current.querySelectorAll('.projects__single');
            gsap.set(elements, { autoAlpha: 0 });
            gsap.fromTo(elements, { y: '-=50', autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: .3, duration: .5, ease: 'easeInOut' })

        }

    }, [props.projects])
    return (
        <section className="projects">
            <h2 className="sectionHeader">Projects</h2>
            <Container>
                <div className="projects__list" ref={wrapper}>
                    <Single
                        color="first"
                        img={ewidencja1}
                        title="Ewidence"
                        description="description"
                        github="https://github.com/michalpruchniak/Ewidencja"
                    />
                    <Single
                        color="second"
                        img={ewidencja1}
                        title="Portfolio"
                        description="description"
                        github="https://github.com/michalpruchniak/portfolio-react"
                    />
                </div>
            </Container>

        </section>
    );
}

export default App;
