import './Footer.css';
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className='designText'>
                <FaRegCopyright/>
                <p>Designed and developed by Marika Mulder</p>
            </div>
            <div className='socialLinks'>
                <div><a href="https://github.com/marikamulder"><FaGithub/></a></div>
                <div><a href="https://www.linkedin.com/in/marika-mulder/"><FaLinkedin/></a></div>
            </div>
        </footer>
    );
}

export default Footer;