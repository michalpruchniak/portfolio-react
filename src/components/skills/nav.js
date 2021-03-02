import { useEffect } from "react";

const SkillsNav = (props) => {

    useEffect(() => {
        const link = document.querySelector('.skills__menu li');
        const marker = document.querySelector('.marker');

        if(props.active != null && link.offsetLeft != marker.offsetLeft){

            indicator(link, props.active)
        }
    })

    const indicator = (e, category) => {
        const marker = document.querySelector('.marker');
        marker.style.left = e.offsetLeft + "px";
        marker.style.width = e.offsetWidth + "px"

        props.checkSkills(category)
        console.log(e.offsetLeft);
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