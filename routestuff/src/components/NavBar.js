import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar=(props)=>{
    // setTimeout(()=>{
    //   props.history.push('/About')
    // },2000)
    return(
        <div >
            <nav className="nav-wrapper red darken-3">
                <a className="brand-logo" href="--">rahul king</a>
                    <ul className="right">
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
            </nav>
        </div>
    )
}

export default withRouter(NavBar)