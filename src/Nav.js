import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);

    const transititonNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
    window.addEventListener("scroll", transititonNavBar);
    return () => window.removeEventListener("scroll", transititonNavBar);
    }, []);

    return (
    <div className='nav'>
        <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
        <img 
            className="nav_avatar"      
        src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57"
        alt=""
        />

        <img 
            className="nav_logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
        alt=""
        />

    </div>    
    </div>
    </div>
    )
}

export default Nav
