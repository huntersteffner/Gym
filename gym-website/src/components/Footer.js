import FooterSocial from './FooterSocial'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="bg-black ">
      <div className='container mx-auto flex flex-col justify-between items-start px-10 text-white md:flex-row md:items-center text-lg md:text-xl'>
        <div className="footer-section flex flex-col">
          <Logo />
          <p>&copy; {footerYear} All Rights Reserved</p>
        </div>
        <div className="footer-section">
          <p>Email: contact@examplegym.com</p>
          <p>Phone: 555 555 5555</p>
        </div>
        <div className="footer-section">
          <Link to="/Gym">Home</Link>
          <Link to="/Gym/about">About</Link>
          <Link to="/Gym/personal-training">Personal Training</Link>
          <Link to="/Gym/group-classes">Group Classes</Link>
          <Link to="/Gym/membership">Membership</Link>
          <Link to="/Gym/careers">Careers</Link>
        </div>

        <div className="py-3 mt-3">
          <FooterSocial />
        </div>
      </div>
    </footer>
  )
}

export default Footer
