import React, {useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import Hamburger from './Hamburger'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState('burger-bar unclicked')

  return (
    <header className="flex justify-around bg-black text-white">
      <h1 className="text-3xl">Gym Logo</h1>
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
