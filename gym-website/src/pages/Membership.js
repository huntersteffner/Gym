import BannerText from '../components/BannerText'
import membershipSquat from '../img/membership-squat.jpg'
import { FaSwimmer, FaDumbbell } from 'react-icons/fa'
import { TbBike } from 'react-icons/tb'
import { BsFillPeopleFill } from 'react-icons/bs'

const Membership = () => {
  return (
    <>
      <div className="banner-membership banner-h-sm bg-cover bg-center  bg-no-repeat h-1/2 flex justify-center items-center">
        <BannerText title="Membership" />
      </div>
      <section className=" bg-amber-800 text-white py-5">
        <div className="flex flex-col justify-center items-center container mx-auto">
          <h1>Become a Member Today!</h1>
          <a className="btn md:w-1/2" href="#test">
            Sign Up
          </a>
        </div>
      </section>
      <section className="bg-black  text-white ">
        <div className="container mx-auto py-3 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
          <div className="membership-icons-container">
            <TbBike className="membership-icons-icon" />
            <p className="membership-icons-p">Group Classes</p>
          </div>
          <div className="membership-icons-container">
            <FaDumbbell className="membership-icons-icon" />
            <p className="membership-icons-p">Top of the Line Equipment</p>
          </div>
          <div className="membership-icons-container">
            <FaSwimmer className="membership-icons-icon" />
            <p className="membership-icons-p">Swimming</p>
          </div>
          <div className="membership-icons-container">
            <BsFillPeopleFill className="membership-icons-icon" />
            <p className="membership-icons-p">Great Community</p>
          </div>
        </div>
      </section>
      <section className=" bg-black text-white py-3">
        <div className='container mx-auto flex flex-col md:justify-center md:flex-row  md:space-x-5'>
          <img className='rounded-lg h-full object-cover md:w-1/2' src={membershipSquat} alt="Squat" />
          <div className="flex flex-col justify-center items-center text-center ">
            <p className="text-xl">All of this and so much more for only</p>
            <h3 className="text-5xl">$15.99/month</h3>
          </div>
        </div>
      </section>
      <section className='bg-amber-800' id="test">
        <form>
            
        </form>
      </section>
    </>
  )
}

export default Membership
