import FooterSocial from './FooterSocial'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="bg-black flex flex-col justify-between items-start px-10 text-white md:flex-row md:items-center text-lg md:text-xl">
      <div className="footer-section flex flex-col">
        <Logo />
        <p>&copy; {footerYear} All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p>Email: contact@examplegym.com</p>
        <p>Phone: 555 555 5555</p>
      </div>
      <div className="footer-section">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/personal-training">Personal Training</Link>
        <Link to="/group-classes">Group Classes</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/careers">Careers</Link>
      </div>
      
      <div className="py-3 mt-3">
        <FooterSocial />
      </div>
    </footer>
  )
}



export default Footer
