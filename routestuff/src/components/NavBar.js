import React from 'react'

const NavBar=()=>{
    return(
        <div >
            <nav className="nav-wrapper red darken-3">
                <a className="brand-logo">rahul king</a>
                    <ul className="right">
                        <li><a href="/Home"></a>Home</li>
                        <li><a href="/Contact"></a>Contact</li>
                        <li><a href="/About"></a>About</li>
                    </ul>
            </nav>
        </div>
    )
}

export default NavBar