import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header/>
        <About />
        <Skills />
        <Work />
      <Footer/>
    </div>
  );
}

export default App;
