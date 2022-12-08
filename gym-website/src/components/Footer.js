import FooterSocial from './FooterSocial'

const Footer = () => {
  return (
    <footer className="bg-black flex justify-between items-center px-10 text-white">
      <div>
        <h2>Logo</h2>
        &copy; 2022 Gym Website
      </div>
      <div>
        <p>Email: contact@examplegym.com</p>
        <p>Phone: 555 555 5555</p>
      </div>
      <div>
        <p>Home</p>
        <p>About</p>
        <p>Personal Training</p>
        <p>Group Classes</p>
        <p>Membership</p>
        <p>Careers</p>
      </div>
      
      <FooterSocial />
    </footer>
  )
}

export default Footer
