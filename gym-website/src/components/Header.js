import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import Logo from './Logo'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const hamburgerHandler = () => {
    setMenuOpen(!menuOpen)
  }

  const isComputer = useMediaQuery({
    query: '(min-width: 768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })

  return (
    <header className="flex justify-around bg-black text-white">
      <Logo />
      {/* Desktop Menu */}
      {isComputer && (
        <nav className="hidden space-x-4 text-3xl md:flex">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/personal-training">Personal Training</CustomLink>
          <CustomLink to="/group-classes">Group Classes</CustomLink>
          <CustomLink to="/membership">Membership</CustomLink>
          <CustomLink to="/careers">Careers</CustomLink>
        </nav>
      )}
      {isMobile && (
        <button
          id="menu-btn"
          class={`block hamburger focus:outline-none z-50 ${
            menuOpen ? 'open' : ''
          } `}
          type="button"
          onClick={hamburgerHandler}
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      )}
      {/* Mobile Menu */}
      {isMobile && <MobileMenu open={menuOpen} />}
    </header>
  )
}

// Function for Routes to work. Copied from documentation
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <div className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}
