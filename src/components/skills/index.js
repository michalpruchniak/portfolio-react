import React, { useEffect } from 'react'
import SkillsNav from './nav'
import  Frontend from './Frontend'
import  Backend from './Backend'
import  Other from './Other'
import { useState } from 'react';

function App(props) {
    const [skill, setSkill] = useState(null)

    const checkSkills = skill => {
        setSkill(skill)
    }
    useEffect(() => {
            setSkill(props.skills)
            console.log(props.skills)



    }, [props.skills])


    return (
        <section className="skills">
            <h2 className="sectionHeader sectionHeader--skills">Skills</h2>
            <SkillsNav active={skill} checkSkills={checkSkills} />
            <div className="skills__container">
                {skill === 'Frontend' ? <Frontend /> : ''}
                {skill === 'Backend' ? <Backend /> : ''}
                {skill === 'Other' ? <Other /> : ''}
            </div>
        </section>
    );
}

export default App;
