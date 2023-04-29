import './Skills.css';
import { TbBrandVscode } from "react-icons/tb";
import { MdPhonelink } from "react-icons/md";
import { SiFirebase } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaCogs } from "react-icons/fa";

function Skills() {

    return (
        <div id='idSkillBox' className='skillBox'>
            <div className='skillContent'>
                <h2>My Toolbox of Skills</h2>
                <div className='skillList'>
                    <div><FaHtml5 /><h3>HTML</h3></div>
                    <div><FaCss3Alt /><h3>CSS</h3></div>
                    <div><FaJsSquare /><h3>JavaScript</h3></div>
                    <div><FaReact /><h3>React</h3></div>
                    <div><FaGitAlt /><h3>Git</h3></div>
                    <div><FaGithub /><h3>Github</h3></div>
                    <div><FaCogs /><h3>REST API</h3></div>
                    <div><TbBrandVscode /><h3>VS Code</h3></div>
                    <div><MdPhonelink /><h3>Responsive</h3></div>
                    <div><SiFirebase /><h3>Firebase</h3></div>
                </div>
            </div>
        </div>
    );
}

export default Skills;