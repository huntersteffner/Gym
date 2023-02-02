import { Link } from 'react-router-dom'
import { Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import teamMember from '../img/careers-team-member.jpg'

import testimonial1 from '../img/home-testimonial1.jpg'
import testimonial2 from '../img/home-testimonial2.jpg'
import testimonial3 from '../img/home-testimonial3.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

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
      <section className=" text-white ">
        <div className="container mx-auto  md:bg-amber-800">
          <div className='flex flex-col items-center justify-center font-bold text-xl text-center space-y-3 p-2  md:space-x-6 md:space-y-0 md:text-3xl lg:text-5xl md:flex-row md:h-[10rem]'>
            <h2>Industry's Best Equipment,</h2>
            <h2>Training,</h2>
            <h2>Great Community</h2>
          </div>
        </div>
      </section>
      <section className=" text-white">
        <div className="bg-black container mx-auto">
          <Swiper
            modules={[Navigation, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            effect
            speed={800}
            loop
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-screen md:h-[35rem]"
          >
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center md:flex-row">
              <img
                className="rounded-full object-cover h-[18rem] w-[18rem] md:h-[20rem] md:w-[20rem]"
                src={testimonial1}
                alt=""
              />
              <div className="text-center m-3">
                <p className="text-2xl font-bold md:text-6xl">Mitchell</p>
                <p className="text-xl md:text-xl">
                  "My life has totally changed since becoming a part of this
                  gym."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center md:flex-row">
              <img
                className="rounded-full object-cover h-[18rem] w-[18rem] md:h-[20rem] md:w-[20rem]"
                src={testimonial2}
                alt=""
              />
              <div className="text-center m-3">
                <p className="text-2xl font-bold md:text-6xl">Jessica</p>
                <p className="text-xl md:text-xl">
                  "I just feel so much better about myself ever since becoming a
                  part of the Local Gym."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full flex flex-col justify-center items-center md:flex-row">
              <img
                className="rounded-full object-cover h-[18rem] w-[18rem] md:h-[20rem] md:w-[20rem]"
                src={testimonial3}
                alt=""
              />
              <div className="text-center m-3">
                <p className="text-2xl font-bold md:text-6xl">Paul</p>
                <p className="text-xl md:text-xl">
                  "I can finally keep up with my kids. Prioritizing my health
                  was one of the best decisions I've made. No better place to do
                  it than the Local Gym."
                </p>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </section>

      <section className=" text-white">
        <div className="flex flex-col justify-center items-center container mx-auto text-center md:flex-row md:bg-amber-800">
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
