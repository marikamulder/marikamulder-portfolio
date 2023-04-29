import './MainMenu.css';

function MainMenu() {

    const scrollAbout = () => {
        var topOfElement = document.querySelector('#idAboutBox').offsetTop - 85;
        window.scroll({ top: topOfElement, behavior: "smooth" });
    };

    const scrollSkills = () => {
        var topOfElement = document.querySelector('#idSkillBox').offsetTop - 85;
        window.scroll({ top: topOfElement, behavior: "smooth" });
    };

    const scrollProjects = () => {
        var topOfElement = document.querySelector('#idProjectsBox').offsetTop - 85;
        window.scroll({ top: topOfElement, behavior: "smooth" });
    };

    return (
        <div>
            <ul className='hashLinks'>
                <li onClick={scrollAbout}>About</li>
                <li onClick={scrollSkills}>Skills</li>
                <li onClick={scrollProjects}>Projects</li>
            </ul>
        </div>
    );
}

export default MainMenu;