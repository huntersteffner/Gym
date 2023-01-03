import { useState } from 'react'

import BannerText from '../components/BannerText'
import CareersCard from '../components/Careers/CareersCard'

// https://unsplash.com/photos/nlZTjUZX2qo
import teamMember from '../img/careers-team-member.jpg'
import personalTrainer from '../img/personal-training-woman-ropes.jpg'
import fitnessInstructor from '../img/personal-training-cardio.jpg'
import yogaInstructor from '../img/personal-training-yoga.jpg'


const Careers = () => {
  
  const jobs = {
    teamMember: {
      title: 'Team Member',
      text: `Become one of our team members and assist with all the day to day jobs and responsibilities of maintaining the gym.`,
      responsibilities: [
        {li: 'Greeting Members at Front Desk', key: 1},
        {li:'Registering New Members', key: 2},
        {li:'Cleaning the Facility', key: 3},
        {li:'Organizing Equipment', key: 4},
        {li: 'Guarantee Safe Environment for all Members', key: 5}
      ],
      image: teamMember
    },
    personalTrainer: {
      title: 'Personal Trainer',
      text: 'Help guide others on their fitness journey with competitive compensation.',
      responsibilities: [
        {li: 'Form one-on-one relationships with Trainees', key: 1},
        {li:'Identify unique fitness needs and goals to each Trainee', key: 2},
        {li:'Create tailored workout plans to individuals\'s needs', key: 3},
        {li:'Correct and improve form on individuals during workouts', key: 4},
        {li: 'Track trainee\'s progress over time', key: 5},
        {li: 'Monitor that safety regulations are being followed', key: 6}
      ],
      image: personalTrainer
    },
    fitnessInstructor: {
      title: 'Fitness Instructor',
      text: 'Lead our group fitness classes',
      responsibilities: [
        {li: 'Lead HIIT and Cardio Group Classes', key: 1},
        {li:'Bring encouraging attitude', key: 2},
        {li:'Facilitate comradery among members participating', key: 3},
        {li:'Monitor that safety regulations are being followed', key: 4}
      ],
      image: fitnessInstructor
    },
    yogaInstructor: {
      title: 'Yoga Instructor',
      text: 'Lead our yogo classes to assist in recovery and relaxation',
      responsibilities: [
        {li: 'Lead yoga classes', key: 1},
        {li:'Instruct members in correct yoga movements', key: 2},
        {li:'Monitor that safety regulations are being followed', key: 3},
        {li:'Organizing Equipment', key: 4},
        {li: 'Guarantee Safe Environment for all Members', key: 5}
      ],
      image: yogaInstructor
    }
  }

  const [job, setJob] = useState({
    title: jobs.teamMember.title,
    text: jobs.teamMember.text,
    image: jobs.teamMember.image,
    responsibilities: jobs.teamMember.responsibilities
  })

  const jobHandler = (e) => {
    setJob({
      title: jobs[e.target.id].title,
      text: jobs[e.target.id].text,
      image: jobs[e.target.id].image,
      responsibilities: jobs[e.target.id].responsibilities
    })
  }


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
          <div id='teamMember' className='text-2xl' onClick={jobHandler}>Team Member</div>
          <div id='personalTrainer' className='text-2xl' onClick={jobHandler}>Personal Trainer</div>
          <div id='fitnessInstructor' className='text-2xl' onClick={jobHandler}>Fitness Instructor</div>
          <div id='yogaInstructor' className='text-2xl' onClick={jobHandler}>Yoga Instructor</div>
          
        </div>
        <CareersCard image={job.image} title={job.title} text={job.text}responsibilities={job.responsibilities}/>
      </section>
    </>
  )
}

export default Careers
