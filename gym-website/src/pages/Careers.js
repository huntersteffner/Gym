import BannerText from '../components/BannerText'
import CareersCard from '../components/Careers/CareersCard'

// https://unsplash.com/photos/nlZTjUZX2qo
import teamMember from '../img/careers-team-member.jpg'

const Careers = () => {
  return (
    <>
      {/* https://unsplash.com/photos/CPSjcuuV8E8 */}
      <div className="banner-careers banner-h-sm bg-cover bg-bottom bg-no-repeat h-1/2 flex justify-center items-center">
        <BannerText title="Careers" />
      </div>
      <section>
        <h1>Looking for a job!</h1>
        <p>Check out the list of where we are currently hiring!</p>
      </section>
      <section className="container mx-auto flex justify-between">
        <div>
          <h2>Open Positions</h2>
          <div className='text-2xl'>Team Member</div>
          <div>Personal Trainer</div>
          <div>Fitness Instructor</div>
          <div>Yoga Instructor</div>
          
        </div>
        <CareersCard image={teamMember} title='Job title' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid, eveniet ipsum placeat architecto fugit laudantium atque sapiente? Ducimus quidem doloribus sequi fugit incidunt eos dolore laborum eum reiciendis aliquam quae asperiores nulla pariatur nisi molestias ad odit quisquam temporibus, repudiandae libero aspernatur labore quis, velit suscipit? Aut, quaerat ea?'/>
      </section>
    </>
  )
}

export default Careers
