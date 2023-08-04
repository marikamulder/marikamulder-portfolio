import './About.css';

function About() {
    return (
        <div id='idAboutBox' className="aboutBox">
            <div className='aboutContent'>
                <h2>About Me</h2>
                <div className='aboutList'>
                    <div className='introAbout'>
                        <div className='introBox'>Hello, my name is Marika Mulder and I have recently completed the <i><b>Web Development and Internet Applications</b></i> program at Fanshawe College.</div>
                        <div className='introBox'>I thoroughly enjoyed my time at Fanshawe, learning how to build unique and creative websites/applications, meeting and working with all sorts of different people, and just seeing how far I have grown since I started.</div>
                        <div className='introBox'>I am eager to start my journey as a web developer and to continue learning new skills and technologies that will enable me to build amazing new projects.</div>
                        <div className='introBox'>When I’m not coding, I like to create cross stitch crafts, work on different puzzles/brain teasers, listen to music, and just hang out with my cat.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;