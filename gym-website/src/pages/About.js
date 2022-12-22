import ptImage from '../img/personal-training-woman-ropes.jpg'
import classesImage from '../img/personal-training-yoga.jpg'
import aboutManager from '../img/about-manager1.jpg'
import BannerText from '../components/BannerText'
import AboutCard from '../components/About/AboutCard'
import AboutTrainingCard from '../components/About/AboutTrainingCard'

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
        <section className="container flex flex-col mx-auto">
          <h2>We have everything you could ever need</h2>
          <div className="grid grid-cols-1 space-y-4 gap-0 lg:grid-cols-2 lg:space-y-0 lg:gap-4">
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
        <section className="container mx-auto">
          <h2>Training</h2>
          
          <div className="flex flex-col md:flex-row">
            <AboutTrainingCard
              image={ptImage}
              alt="Personal Training"
              reverse={false}
            />
            <AboutTrainingCard
              image={classesImage}
              alt="Yoga Class"
              reverse={true}
            />
          </div>
        </section>
        <section className="container mx-auto flex flex-col mt-3 md:flex-row">
          {/* Manager */}
          <div>
            {/* https://unsplash.com/photos/eaUUbS-42YQ */}
            <img
              className="rounded-full overflow-hidden"
              src={aboutManager}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-2xl font-bold">
              Michael Wolfe - Owner & Founder
            </h4>
            <p className="text-xl m-2">
              For over ten years I've been running this gym and have watched
              countless people change their lives. Not only do we have the
              equipment of a commercial gym, but we have the environment and
              community of a small gym. I believe there's no better place in the
              area that would be better to get your workout in. It's my passion
              to help people become healthier and am thankful I get paid to do
              this.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
