import { Link } from 'react-router-dom'
import teamMember from '../img/careers-team-member.jpg'

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center banner-home h-screen bg-cover bg-no-repeat">
        <div className="flex flex-col items-center justify-center space-x-4 px-6 py-8 text-white w-[80%] bg-amber-800 rounded-xl opacity-90 md:w-[60%] md:py-16">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl">Welcome to the Local Gym</h1>
            <p className="text-lg md:text-2xl">Quality of commerical gym.</p>
            <p className="text-lg md:text-2xl">Culture of a small gym.</p>
          </div>
          <Link to="/Gym/membership" className="btn mt-2 md:w-1/2">
            Membership
          </Link>
        </div>
      </div>
      <section className="bg-amber-800 text-white">
        <div className="container mx-auto">
          <h2>Industry's best Equipment</h2>
          <h2>Training</h2>
          <h2>Great Community</h2>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="container mx-auto">
          <h3>Testimonials</h3>
        </div>
      </section>
      <section className="bg-amber-800 text-white">
        <div className="flex flex-col justify-center items-center container mx-auto text-center md:flex-row">
          <div>
            <h4 className="text-3xl font-bold">Looking for a job?</h4>
            <p className="text-xl">We'd love to have you on our team</p>
          </div>
          <div className="relative md:w-1/2">
            <img src={teamMember} alt="Team Member" />
            <div className="absolute flex bottom-2 w-full px-14">
              <Link to="/Gym/careers" className="btn mx-auto">
                Careers Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
