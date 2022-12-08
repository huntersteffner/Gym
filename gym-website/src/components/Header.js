import React, {useState} from 'react'
import MobileMenu from './MobileMenu'

import {Link, useMatch, useResolvedPath} from 'react-router-dom'


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const hamburgerHandler = () => {
      setMenuOpen(!menuOpen)
    }


    
  return (
    <header className="flex justify-around bg-black text-white">
      <h1>Logo</h1>
      {/* Desktop Menu */}
      <nav className="hidden space-x-4 text-3xl md:flex">
        {/* <div ><a href="/">Home</a></div>
        <div><a href="/about">About</a></div>
        <div><a href="/personaltraining">Personal Training</a></div>
        <div>Group Classes</div>
        <div>Membership</div> */}
        <CustomLink to='/' >Home</CustomLink>
        <CustomLink to='/about' >About</CustomLink>
        <CustomLink to='/personal-training' >Personal Training</CustomLink>
      </nav>
      <button
          id="menu-btn"
          class={`block hamburger md:hidden focus:outline-none z-50 ${menuOpen ? 'open': ''} `}
          type="button"
          onClick={hamburgerHandler}
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
        {/* Mobile Menu */}
        {menuOpen && <MobileMenu/>}
        

      
    </header>
  )
}

// Function for Routes to work. Copied from documentation
function CustomLink({ to,children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  const path = window.location.pathname
  return (
    <div className={isActive ? 'active': ''} >
      <Link to={to} {...props}>{children}</Link>
    </div>
  )
}