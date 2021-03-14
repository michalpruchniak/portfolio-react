import { Container } from 'react-grid-system'
import Skills from './components/skills/index'
import Projects from './components/projects/index'
import Parallax from './components/parallax/index'
import './App.css';
import { useState, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Main() {
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState('')
  const [parallax, setParallax] = useState(false)

  useEffect(() => {
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
        start: 'top 40%',
        markers: { startColor: "green", endColor: "yellow", fontSize: "12px" },
        onUpdate: () => {
            setProjects(true)
        }
      }
    })
    gsap.to('section', {
      scrollTrigger: {
        trigger: '.parallax',
        once: true,
        start: 'top 20%',
        markers: { startColor: "green", endColor: "yellow", fontSize: "12px" },
        onUpdate: () => {
            setParallax(true)
        }
      }
    })


  })

  return (
    <div className="App">
      <div className="row">
        <Parallax parallax={parallax} />
        <Projects projects={projects} />
        <Skills skills={skills} />

      </div>
      <div className="hello"></div>
    </div>
  );
}

export default Main;
