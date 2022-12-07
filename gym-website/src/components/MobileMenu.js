import MobileMenuLink from "./MobileMenuLink"

const MobileMenu = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 h-1/2 w-full z-20">
      <div className="bg-blue-500 opacity-80 w-full h-full z-30 absolute"></div>
      <nav className="text-3xl z-40 text-center">
        
        <MobileMenuLink title={'Home'}/>
        <MobileMenuLink title={'About'}/>
        <MobileMenuLink title={'Personal Training'}/>
        <MobileMenuLink title={'Group Classes'}/>
        <MobileMenuLink title={'Membership'}/>
      </nav>
    </div>
  )
}

export default MobileMenu
