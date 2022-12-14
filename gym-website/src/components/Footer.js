import FooterSocial from './FooterSocial'
import { IoBarbell } from 'react-icons/io5'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col justify-between items-start px-10 text-white md:flex-row md:items-center text-lg md:text-xl">
      <div className="footer-section flex flex-col">
        <Link
          to="/"
          className="flex flex-col self-start justify-center items-center"
        >
          <div>
            <IoBarbell className="text-6xl" />
          </div>
          <div>
            <p className="text-3xl">Local Gym</p>
          </div>
        </Link>
        <p>&copy; 2023 All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p>Email: contact@examplegym.com</p>
        <p>Phone: 555 555 5555</p>
      </div>
      <div className="footer-section">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/personal-training">Personal Training</CustomLink>
        <CustomLink to="/group-classes">Group Classes</CustomLink>
        <CustomLink to="/membership">Membership</CustomLink>
        <CustomLink to="/careers">Careers</CustomLink>
      </div>
      <div className="py-3 mt-3">
        <FooterSocial />
      </div>
    </footer>
  )
}

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

export default Footer
