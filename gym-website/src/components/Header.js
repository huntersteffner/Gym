import React, {useState} from 'react'
import MobileMenu from './MobileMenu'


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
        <div className="hover:cursor-pointer">Home</div>
        <div>About</div>
        <div>Personal Training</div>
        <div>Group Classes</div>
        <div>Membership</div>
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
