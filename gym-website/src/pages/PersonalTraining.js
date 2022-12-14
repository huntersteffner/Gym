import ptBench from '../img/personal-training-bench.jpg'
import ptCardio from '../img/personal-training-treadmill.jpg'
import ptForm from '../img/personal-training-form-check.jpg'
import ptNutrition from '../img/personal-training-nutrition.jpg'

// Components
import PtCard from '../components/PersonalTraining/PtCard'
import PtForm from '../components/PersonalTraining/PtForm'
import PtModal from '../components/PersonalTraining/PtModal'
import BannerText from '../components/BannerText'

const PersonalTraining = (props) => {
  const texts = {
    cardio: {
      title: 'Cardio',
      body: `Whether you're training for a race, want to be able to keep up with your kids, or simply want to increase your endurance, our trainers will set up the perfect cardio plan for you.`,
    },
    nutrition: {
      title: 'Customized Diets',
      body: `A healthy lifestyle is more than getting enough exercise; you need a healthy diet as well. Our trainers can help you create a diet specifically tailored to you, and also provide the accountability to stick with it!`,
    },
    form: {
      title: 'Physical Therapy',
      body: `If you're recovering from an injury, we can assist you with rehabilitation to get back to normal faster.`,
    },
    bench: {
      title: 'Strength Training',
      body: `Increase your strength; improve your life.
        Whether you want to competively powerlift or simply improve your
        overall strength, our trainers can help you progressively improve
        your abilities.`,
    },
  }
  return (
    
    <section className="bg-gray-300">
    
      <div className="banner-pt banner-h-sm bg-cover bg-bottom bg-no-repeat h-1/2 flex justify-center items-center">
        <BannerText title="Personal Training" />
      </div>

      <section className=" bg-amber-800 text-white w-full">
        <div className="container mx-auto flex flex-col items-center py-3">
          <p className="text-xl p-4">
            Your fitness journey doesn't have to be something that do alone. Our
            team of personal trainers is ready to do everything to help you
            achieve all of your fitness goals. Our staff is fully accredited
            with the latest in fitness training standards to help push through
            any roadblock you may encounter. From beginner to advanced, our
            trainers can help you no matter what your skill level is, and for a
            reasonable affordable price.
          </p>
          
          <a href="#personal-training" className='btn md:w-1/2 lg:w-1/3'>Sign-Up Today</a>
        </div>
      </section>
      {/* Types of training */}
      <div className="container mx-auto flex flex-wrap md:my-2">
        <div className="space-y-3 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
          {/* https://unsplash.com/photos/8uzJGgJ1_3w */}
          <PtCard
            image={ptCardio}
            title={texts.cardio.title}
            body={texts.cardio.body}
          />
          {/* https://unsplash.com/photos/bRdRUUtbxO0 */}
          <PtCard
            image={ptNutrition}
            title={texts.nutrition.title}
            body={texts.nutrition.body}
          />
          {/* https://unsplash.com/photos/PnUYkTFkOD0 */}
          <PtCard
            image={ptForm}
            title={texts.form.title}
            body={texts.form.body}
          />
          {/* https://unsplash.com/photos/NXMZxygMw8o */}
          <PtCard
            image={ptBench}
            title={texts.bench.title}
            body={texts.bench.body}
          />
        </div>
      </div>
      {/* Sign up form */}
      
      <div id='personal-training' className='container mx-auto m-2'>
        <PtForm />
      </div>
      {/* <PtModal /> */}
      </section>
  )
}

export default PersonalTraining
