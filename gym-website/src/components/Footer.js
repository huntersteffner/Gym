import FooterSocial from './FooterSocial'

const Footer = () => {
  return (
    <footer className="bg-red-600 flex justify-between px-10">
      <div>
        <h2>Logo</h2>
        &copy; 2022 Gym Website
      </div>
      {/* Social */}
      <FooterSocial />
    </footer>
  )
}

export default Footer
