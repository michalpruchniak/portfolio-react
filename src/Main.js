import { Container } from 'react-grid-system'
import Skills from './components/skills/index'
import Projects from './components/projects/index'
import './App.css';
import { useState, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

function Main() {
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState('')

  useEffect(() => {
    setInterval(function () { console.log(projects); }, 1000);
    gsap.registerPlugin(ScrollTrigger);


    gsap.to('section', {
      scrollTrigger: {
        trigger: '.skills',
        once: true,

        start: 'top 20%',
        markers: { startColor: "green", endColor: "yellow", fontSize: "12px" },
        onEnter: () => {
            setSkills('Frontend')
        }
      }
    })
    gsap.to('section', {
      scrollTrigger: {
        trigger: '.projects',
        once: true,
        start: 'top 20%',
        markers: { startColor: "green", endColor: "yellow", fontSize: "12px" },
        onUpdate: () => {
            setProjects(true)


        }
      }
    })


  })

  return (
    <div className="App">
      <div className="hello"></div>
      <Container>
        <Projects projects={projects} />

        <Skills skills={skills} />

      </Container>
      <div className="hello"></div>

    </div>
  );
}

export default Main;
