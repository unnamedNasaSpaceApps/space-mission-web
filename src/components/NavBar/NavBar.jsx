//import react
import { useState } from "react";

//react router
import { NavLink, Link } from "react-router-dom";

//import style
import './NavBar.css';


const NavBar = () =>{
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    /*return(
        <nav className={isNavExpanded ? "topnav responsive" : "topnav"}>
            <div className="unnamed">Unnamed.<sup>Team</sup></div>
            <div className="mid">
                <ul>
                    <li><NavLink to="/" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Home</NavLink></li>
                    <li><NavLink to="/about-us" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>About us</NavLink></li>
                    <li><NavLink to="/blog" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Blog</NavLink></li>
                    <li><NavLink to="/demo" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Demo</NavLink></li>
                </ul>
            </div>
        </nav>
    );*/

    return(
        <nav className='Navegacion'>
          <div className='BrandOutUlSection'><Link to="https://www.spaceappschallenge.org/2023/find-a-team/unnamed/" target="_blank" className="Brand-OutUl">Unnamed.<sup>Team</sup></Link></div>
          <ul className={isNavExpanded ? "topnav responsive" : "topnav"}>
            <div className="Brand"><Link to="/" className="active" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Unnamed.<sup>Team</sup></Link></div>
            <div  iv className="mid">
              <NavLink to="/" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Home</NavLink>
              <NavLink to="/about-us" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>About us</NavLink>
              <NavLink to="/blog" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Blog</NavLink>
              <NavLink to="/demo" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>Demo</NavLink>
            </div>
            <Link to="#!" className="icon" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
              <i className="fa fa-bars"/>
            </Link>
          </ul>
        </nav>
      );
}

export {NavBar};