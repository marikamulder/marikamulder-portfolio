import { useState } from "react";
import './Header.css';
import MainMenu from '../MainMenu/MainMenu';
import { BsSun, BsMoonStars } from "react-icons/bs";

function Header() {

    const [mode, setMode] = useState('BsSun');
  
    function onShiftMode() {
      
      if (mode === 'BsSun') {
        setMode('BsMoonStars');
        document.documentElement.setAttribute('data-theme', 'dark');
  
      } else if (mode === 'BsMoonStars') {
        setMode('BsSun');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <header className="header">
            <div className='nameHeader'><a onClick={goToTop}>Marika Mulder</a></div>
            <div className='menuHeader'><MainMenu /></div>
            <div className='toggleHeader'><a onClick={onShiftMode}>{mode === "BsSun" ? <BsSun /> : <BsMoonStars />}Mode</a></div>
        </header>
    );
}

export default Header;