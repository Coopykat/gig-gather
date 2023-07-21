import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const NavBar = () => {
  
    return (
      <div className='navbar-container'>
        <NavLink to="/"><h1 tabindex="0">Gig Gather</h1></NavLink>
          <NavLink className="navlinks" to="/"><div tabindex="0">Connexion</div></NavLink>
          <NavLink className="navlinks" to="/create-post"><div tabindex="0">Post a gig</div></NavLink>
          <NavLink className="navlinks" to="/my-gigs"><div tabindex="0">Mes Concerts</div> </NavLink>
  
      </div>
    );
  };


export default NavBar