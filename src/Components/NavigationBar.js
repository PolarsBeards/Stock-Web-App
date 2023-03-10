import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import "./NavigationBar.css";

function Navbar() {
    const [click, setClick] = useState (false);
    const handleClick = () => setClick (!click)
    const closeMobileMenu = () => setClick (false);
    const [button,setButton] = useState (true);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton()
    }, []);
window.addEventListener("resize", showButton)

    return (
    <nav className = "navbar">
        <div className = "navbar-container"> 
        <div className = "menu-icon" onClick = {handleClick}>
        <i className = {click ? "fas fa-times" :"fas fa-bars"}/>
        </div>
        <ul className = {click ? "nav-menu active" : "nav-menu"}>
        <li className = "nav-item">
        <Link to="/" className = "nav-links" onClick = {closeMobileMenu} >
            Home Page
        </Link>
        </li>
        <li className = "nav-item">
        <Link to="/stock" className = "nav-links" onClick = {closeMobileMenu} >
            Search a Stock Price
        </Link>
       </li>

        </ul>
        
        </div>
    </nav>
    );
};
export default Navbar;