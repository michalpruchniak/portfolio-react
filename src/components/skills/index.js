import React, { useEffect } from 'react'
import SkillsNav from './nav'
import  Frontend from './Frontend'
import { useState } from 'react';

function App(props) {
    const [skill, setSkill] = useState(null)

    const checkSkills = skill => {
        setSkill(skill)
    }
    useEffect(() => {
        setSkill(props.skills)
    }, [props.skills])

    return (
        <div className="allSkills">
            <h2 className="sectionHeader sectionHeader--skills">Skills</h2>
            <SkillsNav active={skill} checkSkills={checkSkills} />
            {skill === 'Frontend' ? <Frontend /> : ''}
            {skill === 'Backend' ? 'Backend' : ''}
        </div>
    );
}

export default App;
