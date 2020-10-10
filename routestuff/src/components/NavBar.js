import React from 'react'

const NavBar=()=>{
    return(
        <div >
            <nav className="nav-wrapper red darken-3">
                <a className="brand-logo">rahul king</a>
                    <ul className="right">
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        <li><a href="/About">About</a></li>
                    </ul>
            </nav>
        </div>
    )
}

export default NavBar