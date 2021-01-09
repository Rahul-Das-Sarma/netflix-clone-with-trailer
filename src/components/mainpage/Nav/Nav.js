import React, { useEffect, useState } from "react";
import "./Nav.css";
import {Link} from 'react-router-dom'


function Nav(){

    const [show, handleShow] = useState(false);

    useEffect(() => {
 window.addEventListener("scroll", () => {
     if(window.scrollY > 100){
         handleShow(true);
     }else handleShow(false);
 });
//  return () => window.removeEventListener("scroll");
    }, []);

  return ( <div className={`img__nav ${show && "img__navBlack"}`}>
      <Link to='/'>
        <img className="image__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix-Logo"
         />
         </Link>
    </div>)
}

export default Nav;