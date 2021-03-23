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
            <h2 className="sectionHeader">About me</h2>
            <Container className="description">
                <p>Hi. My name is Michał and I live in Lublin. I started learn programming in high school. First language which I learned was object pascal (Delphi). It was very popular at this time. My secong language was PHP. Unfortunately, PHP (without frameworks) not suitable for biggest projects. So I learned Code Igniter and then Laravel.</p>
            </Container>
        </section>
    );
}

export default About