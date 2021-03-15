import { Container } from 'react-grid-system'
import Skills from './components/skills/index'
import Projects from './components/projects/index'
import Parallax from './components/parallax/index'
import About from './components/about/index'
import './App.css';
import { useState, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'


function Main() {
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState('')
  const [parallax, setParallax] = useState(false)
  const [about, setAbout] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('section', {
      scrollTrigger: {
        trigger: '.parallax',
        once: true,
        start: 'top 20%',
        onUpdate: () => {
          setParallax(true)
        }
      }
    })
    gsap.to('section', {
      scrollTrigger: {
        trigger: '.about',
        once: true,
        start: 'top 20%',
        markers: { startColor: "green", endColor: "yellow", fontSize: "12px" },
        onUpdate: () => {
          setAbout(true)
        }
      }
    })
    gsap.to('section', {
      scrollTrigger: {
        trigger: '.projects',
        once: true,
        start: 'top 40%',
        onUpdate: () => {
          setProjects(true)
        }
      }
    })
    gsap.to('section', {
      scrollTrigger: {
        trigger: '.skills',
        once: true,

        start: 'top 20%',
        onEnter: () => {
            setSkills('Frontend')
        }
      }
    })





  })

  return (
    <div className="App">
      <div className="row">
        <Parallax parallax={parallax} />
        <About about={about} />
        <Projects projects={projects} />
        <Skills skills={skills} />

      </div>
      <div className="hello"></div>
    </div>
  );
}

export default Main;
