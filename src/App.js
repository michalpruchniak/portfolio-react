import { Container } from 'react-grid-system'
import Skills from './components/skills/index'
import './App.css';
import { useState, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

function App() {
  const [skills, setSkills] = useState('')

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: '.allSkills',
      start: '30% 30%',
      marks: true,
      onEnter: () => {
          setSkills('Frontend')

        }

    })
  })

  return (
    <div className="App">
      <div className="hello"></div>
      <Container>
        <Skills className="allSkills" skills={skills}/>
    </Container>
      <div className="hello"></div>

    </div>
  );
}

export default App;
