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
          <a className="btn md:w-1/2" href="#membership-form">
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
        <div className="container mx-auto flex flex-col md:justify-center md:flex-row  md:space-x-5">
          <img
            className="rounded-lg h-full object-cover md:w-1/2"
            src={membershipSquat}
            alt="Squat"
          />
          <div className="flex flex-col justify-center items-center text-center ">
            <p className="text-xl">All of this and so much more for only</p>
            <h3 className="text-5xl">$15.99/month</h3>
          </div>
        </div>
      </section>
      <section className="bg-amber-800 text-white" id="membership-form">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-bold">Become a member today!</h4>
          <p className="text-xl ">
            We'd love to have you as a part of our gym community. We want all
            our potential members to fully understand what our gym has to offer
            before signing up. Schedule a tour and come on by to see what we
            have to offer.
          </p>
        </div>
        <form className="flex flex-col justify-center items-center container mx-auto p-2">
          <div className="flex flex-col justify-center w-full space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <div className="flex flex-col space-y-2 w-full md:w-auto">
              <div className="w-full">
                <input
                  className="w-full"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="w-full">
                <input
                  className="w-full"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="w-full">
                <input
                  className="w-full"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="w-full md:w-auto">
              <div>
                <textarea
                  className="h-20 w-full"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <p className="text-xl">Date you can come to visit.</p>
                <input className="w-[80%]" type="date" />
              </div>
            </div>
            <div className="flex flex-col items-center md:w-1/2">
              <p className="text-xl">Times of day you can come visit.</p>
              <div className='flex flex-col w-[70%]'>
                <div className="form-checkbox-div">
                  <label>6 AM - 9 AM</label>
                  <input type="checkbox" />
                </div>
                <div className="form-checkbox-div">
                  <label>9 AM - Noon</label>
                  <input type="checkbox" />
                </div>
                <div className="form-checkbox-div">
                  <label>Noon - 4 PM</label>
                  <input type="checkbox" />
                </div>
                <div className="form-checkbox-div">
                  <label>4 PM - 7 PM</label>
                  <input type="checkbox" />
                </div>
                <div className="form-checkbox-div">
                  <label>7 PM - 10 PM</label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn md:w-1/2 lg:w-1/3 md:mt-2">
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Membership
