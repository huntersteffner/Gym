import aboutPush from '../img/about-push.jpg'
import aboutLegPress from '../img/about-legpress.jpg'
import aboutPool from '../img/about-pool.jpg'
import aboutDumbbells from '../img/about-dumbbells.jpg'
import ptImage from '../img/personal-training-woman-ropes.jpg'
import classesImage from '../img/personal-training-yoga.jpg'
import BannerText from '../components/BannerText'

const About = () => {
  // https://unsplash.com/photos/JbI04nYfaJk
  return (
    <>
      <div className="banner-about banner-h-sm bg-cover bg-bottom bg-no-repeat h-1/2 flex justify-center items-center">
        <BannerText title='About our Gym'/>
      </div>
      <main>
        <section className="flex flex-col justify-center items-center px-8">
            <h1>About our Gym</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur rem, placeat voluptatibus amet id nihil iure reprehenderit accusantium eaque, sequi animi. Nesciunt excepturi laudantium consequatur, corporis similique tenetur quidem quae.</p>
        </section>
        <section>
            <h2>We have everything you could ever need</h2>
            <div>
                {/* Machine */}
                <h3>Machines</h3>
                <p>Our equipment have the newest equipment and cleanest.</p>
                {/* https://unsplash.com/photos/-b4GeymbJl8 */}
                <img src={aboutLegPress} alt="" />
            </div>
            <div>
                {/* FUnctional */}
                <h3>Functional Workouts</h3>
                <p>Our equipment have the newest equipment and cleanest.</p>
                {/* https://unsplash.com/photos/rA5aJvQ2l6g */}
                <img src={aboutPush} alt="" />
            </div>
            <div>
                {/* Freeweights */}
                <h3>Freeweights</h3>
                <p>Our equipment have the newest equipment and cleanest.</p>
                {/* https://unsplash.com/photos/CQfNt66ttZM */}
                <img src={aboutDumbbells} alt="" />
            </div>
            <div>
                {/* Pool */}
                <h3>Pool</h3>
                <p>Our equipment have the newest equipment and cleanest.</p>
                {/* https://unsplash.com/photos/sdnyvKH4PsA */}
                <img src={aboutPool} alt="" />
            </div>
        </section>
        <section>
            <h2>Training</h2>
            <div>
                <h3>Personal Training</h3>
                <img src={ptImage} alt="" />
                <button>
                    <a href="/personal-training">Click Here</a>
                </button>
            </div>
            <div>
                <h3>Group Classes</h3>
                <img src={classesImage} alt="" />
                <button>
                <a href="/group-classes">Click Here</a>
                </button>
            </div>
        </section>
      </main>
    </>
  )
}

export default About
