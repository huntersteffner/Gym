import MobileMenuLink from "./MobileMenuLink"

const MobileMenu = ({open}) => {
  return (
    <div className={`flex ${open ? 'top-0': '-top-[100vh]'} justify-center items-center fixed top-0 left-0 h-screen w-screen z-20 duration-300`}>
      <div className="bg-blue-500 opacity-90 w-full h-full z-30 absolute"></div>
      <nav className="flex flex-col text-3xl z-40 text-center">
        
        <MobileMenuLink url='/' title={'Home'}/>
        <MobileMenuLink url='/about' title={'About'}/>
        <MobileMenuLink url='/personal-training' title={'Personal Training'}/>
        <MobileMenuLink url='/group-classes' title={'Group Classes'}/>
        <MobileMenuLink url='/membership' title={'Membership'}/>
        <MobileMenuLink url='/careers' title={'Careers'}/>
      </nav>
    </div>
  )
}


export default MobileMenu
