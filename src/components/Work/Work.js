import './Work.css';
import Movie from '../Images/movie-mystique-sneakpeak.png';
import Todo from '../Images/to-do-sneakpeak.png';
import Weaponry from '../Images/medieval-weaponry-sneakpeak.png';
import Book from '../Images/book-finder-sneakpeak.png';

import { SiFirebase } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaCogs } from "react-icons/fa";

function Work() {

    return (
        <div id='idProjectsBox' className='projetBox'>
            <div className='projetContent'>
                <h2>Projects</h2>
                <div className='projectList'>
                    <img src={Movie} alt="movie mystique" />
                    <div className='projectInfo'>
                        <h2>Movie Mystique</h2>
                        <p>A movie search engine where users may search up movies they're looking for using the OMDb Api.  They may also add reviews, browse posted reviews, and see movies ranked based on reviews.</p>
                        <h4><FaHtml5 /><FaCss3Alt /><FaJsSquare /><FaReact /><FaCogs /><SiFirebase /></h4>
                        <div className='projectLinkButton'>
                            <button><a href="https://movie-review-navy.vercel.app/">View Live</a></button>
                            <button><a href="https://github.com/marikamulder/movie-review">Github Repo</a></button>
                        </div>
                    </div>
                </div>
                <div className='projectList'>
                    <img src={Book} alt="book finder" />
                    <div className='projectInfo'>
                        <h2>Book Finder</h2>
                        <p>A book search engine where users may search up books they're looking for using the Google Books Api.  Enter keywords, titles, authors, subject, or other criteria to search for books.  The results can then be sorted by several different options. A pair programming project with <a href='https://github.com/AGPenhale14'>Austin Gilfillan-Penhale</a>.</p>
                        <h4><FaHtml5 /><FaCss3Alt /><FaJsSquare /><FaReact /><FaCogs /></h4>
                        <div className='projectLinkButton'>
                            <button><a href="https://bookfinder-virid.vercel.app/">View Live</a></button>
                            <button><a href="https://github.com/marikamulder/bookfinder">Github Repo</a></button>
                        </div>
                    </div>
                </div>
                <div className='projectList'>
                    <img src={Todo} alt="task list" />
                    <div className='projectInfo'>
                        <h2>Check It</h2>
                        <p>A to-do task list app with the option to choose between light and dark modes to suit your mood and environment.</p>
                        <h4><FaHtml5 /><FaCss3Alt /><FaJsSquare /><FaReact /><SiFirebase /></h4>
                        <div className='projectLinkButton'>
                            <button><a href="https://todo-app-chi-woad-89.vercel.app/">View Live</a></button>
                            <button><a href="https://github.com/marikamulder/todo-app">Github Repo</a></button>
                        </div>
                    </div>
                </div>
                <div className='projectList'>
                    <img src={Weaponry} alt="medieval weaponry" />
                    <div className='projectInfo'>
                        <h2>Medieval Weaponry</h2>
                        <p>A fake medieval weaponry store where you can browse a catalog of items, read reviews from other customers, place your own review, add and remove items from your cart, and see the items in your cart along with the total price of said items.</p>
                        <h4><FaHtml5 /><FaCss3Alt /><FaJsSquare /></h4>
                        <div className='projectLinkButton'>
                            <button><a href="https://medieval-weaponry-store.vercel.app/">View Live</a></button>
                            <button><a href="https://github.com/marikamulder/Medieval-Weaponry-Store">Github Repo</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;