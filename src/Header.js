import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    const [activeLink, setActiveLink] = useState('home');

    const linkFunc = (page) => {
        setActiveLink(page)
    }
    return (
        <>
            <div className='header'>
                <h1>Shaxbozjon Nabiyev</h1>
                <div className='menu'>
                    <Link onClick={()=>linkFunc("home")} className={activeLink === 'home' ? "active-link" : "header-link"} to='/'>Home</Link>
                    <Link onClick={()=>linkFunc("about")} className={activeLink === 'about' ? "active-link" : "header-link"} to='/about'>About</Link>
                    <Link onClick={()=>linkFunc("contact")} className={activeLink === 'contact' ? "active-link" : "header-link"} to='/contact'>Contact</Link>
                </div>
            </div>
        </>
    );
}

export default Header;
