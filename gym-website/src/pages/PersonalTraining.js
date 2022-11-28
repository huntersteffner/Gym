import ptBench from '../img/personal-training-bench.jpg'
import ptYoga from '../img/personal-training-yoga.jpg'
import ptCardio from '../img/personal-training-cardio.jpg'
import ptForm from '../img/personal-training-form-check.jpg'

const PersonalTraining = () => {
  return (
    <section className="bg-gray-900">
      <div className="banner-about banner-h-sm bg-cover bg-bottom bg-no-repeat h-1/2 flex justify-center items-center">
        <div className="flex justify-center items-center text-5xl py-5 px-10 bg-red-500 opacity-80 rounded-full">
          <h2>Personal Training</h2>
        </div>
      </div>

      <div className="text-white">
        <p className='text-xl m-4'>
          Your fitness journey does not have to be something that do alone. Our team of personal trainers is ready to do everything to help you achieve all of your fitness goals. Our staff is fully accredited with the latest in fitness training standards to help push through any roadblock you may encounter. From beginner to advanced, our trainers can help you no matter what your skill level is, and for a reasonable affordable price.
        </p>
      </div>
      {/* Types of training */}
      
      {/* Cardio */}
      <div>
        {/* https://unsplash.com/photos/NXMZxygMw8o */}
        <img src={ptCardio} alt="Personal Trainer Yoga" />
      </div>
      {/* https://unsplash.com/photos/y7ywDXWJ-JU */}
      {/* Swimming */}
      {/* Yoga */}
      {/* https://unsplash.com/photos/kufLAiPoIlI */}
      <div>
        {/* https://unsplash.com/photos/NXMZxygMw8o */}
        <img src={ptYoga} alt="Personal Trainer Yoga" />
      </div>
      {/* Weight loss */}
      {/* https://unsplash.com/photos/PnUYkTFkOD0 */}
      <div>
        {/* https://unsplash.com/photos/NXMZxygMw8o */}
        <img src={ptForm} alt="Personal Trainer Form Check" />
      </div>

      {/* Strenght Training */}
      <div>
        {/* https://unsplash.com/photos/NXMZxygMw8o */}
        <img src={ptBench} alt="Personal Trainer Bench Press" />
      </div>
    </section>
  )
}

export default PersonalTraining
