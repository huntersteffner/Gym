import ptImage from '../img/personal-training-woman-ropes.jpg'
import classesImage from '../img/personal-training-yoga.jpg'
import BannerText from '../components/BannerText'
import AboutCard from '../components/About/AboutCard'

const About = () => {
  const aboutCards = [
    {
      key: 1,
      // https://unsplash.com/photos/-b4GeymbJl8
      imageClass: 'about-legpress',
      title: 'State of the Art Equipment',
      text: 'Hit every muscle group with our high quality machines.',
    },
    {
      key: 2,
      // https://unsplash.com/photos/rA5aJvQ2l6g
      imageClass: 'about-push',
      title: 'HIIT',
      text: 'Plenty of space for functional workouts.',
    },
    {
      key: 3,
      // https://unsplash.com/photos/CQfNt66ttZM
      imageClass: 'about-dumbbells',
      title: 'Freeweights',
      text: `We've got all the dumbbells and kettlebells you could possibly need.`,
    },
    {
      key: 4,
      // https://unsplash.com/photos/sdnyvKH4PsA
      imageClass: 'about-pool',
      title: 'Olympic Pool',
      text: 'Come swim some laps in our pool',
    },
    {
      key: 5,
      // https://unsplash.com/photos/b8tSWXHsjk0
      imageClass: 'about-deadlift',
      title: 'Heavy Weights',
      text: 'Build up your strength with deadlifts and squats.',
    },
    {
      key: 6,
      // https://unsplash.com/photos/e1vAwZzbe5I
      imageClass: 'about-trx',
      title: 'And so much more!',
      text: `We've got everything we need to get in the perfect workout!`,
    },
  ]

  

 

  // https://unsplash.com/photos/JbI04nYfaJk
  return (
    <>
      <div className="banner-about banner-h-sm bg-cover bg-bottom bg-no-repeat h-1/2 flex justify-center items-center">
        <BannerText title="About our Gym" />
      </div>
      <main>
        <section className="flex flex-col justify-center items-center px-8">
          <h1>About our Gym</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur rem, placeat voluptatibus amet id nihil iure
            reprehenderit accusantium eaque, sequi animi. Nesciunt excepturi
            laudantium consequatur, corporis similique tenetur quidem quae.
          </p>
        </section>
        <section>
          <h2>We have everything you could ever need</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {aboutCards.map((item) => (
              <AboutCard
                key={item.key}
                imageClass={item.imageClass}
                title={item.title}
                text={item.text}
              />
            ))}
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
