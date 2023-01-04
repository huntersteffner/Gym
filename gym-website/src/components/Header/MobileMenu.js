import MobileMenuLink from "./MobileMenuLink"

const MobileMenu = ({open, linkSelect}) => {
  return (
    <div className={`flex ${open ? 'top-0': '-top-[100vh]'} justify-center items-center fixed top-0 left-0 h-screen w-screen z-20 duration-300`}>
      <div className="bg-black opacity-80 w-full h-full z-30 absolute"></div>
      <nav className="flex flex-col text-3xl z-40 text-center">
        
        <MobileMenuLink linkSelect={linkSelect} url='/Gym/' title={'Home'}/>
        <MobileMenuLink linkSelect={linkSelect} url='/Gym/about' title={'About'}/>
        <MobileMenuLink linkSelect={linkSelect} url='/Gym/personal-training' title={'Personal Training'}/>
        <MobileMenuLink linkSelect={linkSelect} url='/Gym/group-classes' title={'Group Classes'}/>
        <MobileMenuLink linkSelect={linkSelect} url='/Gym/membership' title={'Membership'}/>
        <MobileMenuLink linkSelect={linkSelect} url='/Gym/careers' title={'Careers'}/>
      </nav>
    </div>
  )
}


export default MobileMenu
