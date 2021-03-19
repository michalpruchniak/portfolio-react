import Skills from './components/skills/index'
import Projects from './components/projects/index'
import Parallax from './components/parallax/index'
import About from './components/about/index'
import Contact from './components/contact/index'
import Nav from './components/nav/index'
import './App.css';
import { useState, useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import scrollToElement from 'scroll-to-element'


function Main() {
  const [mainmenu, setMainmenu] = useState(false)
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState('')
  const [parallax, setParallax] = useState(false)
  const [about, setAbout] = useState(false)


  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.App', {
      scrollTrigger: {
        trigger: '.App',
        once: true,
        start: '100px top',
        markers: { startColor: "green", endColor: "yellow", fontSize: "12px" },
        onToggle: self => setMainmenu(self.isActive),
        onUpdate: () => {
          setMainmenu(true)
        }
      }
    })
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
        <Nav
          mainmenu={mainmenu}
          scrollToEl={(el) => { scrollToElement(el) }}
        />
        <Parallax parallax={parallax} />
        <About about={about} />
        <Projects projects={projects} />
        <Skills skills={skills}/>
        <Contact/>

      </div>
    </div>
  );
}

export default Main;
