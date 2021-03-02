import { useEffect } from "react";

const SkillsNav = (props) => {

    useEffect(() => {

        if(props.active != null){
            let link = document.querySelector('.skills__menu li');

            indicator(link, props.active)
        }
    })

    const indicator = (e, category) => {
        const marker = document.querySelector('.marker');
        marker.style.left = e.offsetLeft + "px";
        marker.style.width = e.offsetWidth + "px"

        props.checkSkills(category)
    }
    return(
        <nav className="skills__menu">
            <ul>
                <li  onClick={(e) => indicator(e.target, "Frontend")}>Frontend</li>
                <li onClick={(e) => indicator(e.target, "Backend")}>Backend</li>
                <li onClick={() => props.checkSkills('Others')}>Others</li>
            </ul>
            <div className="marker"></div>
        </nav>
    );
}

export default SkillsNav;