import React, {useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import Hamburger from './Hamburger'
import Logo from './Logo'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState('burger-bar unclicked')

  return (
    <header className="flex justify-around bg-black text-white">
      <Logo/>
      <nav className="hidden space-x-4 text-3xl md:flex">
        <div className="hover:cursor-pointer">Home</div>
        <div>About</div>
        <div>Personal Training</div>
        <div>Group Classes</div>
        <div>Membership</div>
      </nav>
      <div className='md:hidden'>
        

      </div>
      
    </header>
  )
}
