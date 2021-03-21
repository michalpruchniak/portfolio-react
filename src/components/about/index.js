import React, { useEffect } from 'react'
import { Container } from 'react-grid-system';
import gsap from 'gsap'


function About(props){
    useEffect(() => {
        if (props.about === true) {
            const description = document.querySelector('.description > p');
            gsap.set(description, { autoAlpha: 0 });
            gsap.fromTo(description, { y: '-=50', autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: .3, duration: .5, ease: 'easeInOut' })
        }

    }, [props.about])
    return(
        <section className="about" >
            {console.log('about')}
            <h2>About me</h2>
            <Container className="description">
                <p>dfsdf</p>
            </Container>
        </section>
    );
}

export default About