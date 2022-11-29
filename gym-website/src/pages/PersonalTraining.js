import ptBench from '../img/personal-training-bench.jpg'
import ptYoga from '../img/personal-training-yoga.jpg'
import ptCardio from '../img/personal-training-cardio.jpg'
import ptForm from '../img/personal-training-form-check.jpg'
import PtCard from '../components/PtCard'

const texts = {
  bench: {
    title: 'Strength Training',
    body: `Increase your strength; improve your life.
      Whether you want to competively powerlift or simply improve your
      overall strength, our trainers can help you progressively improve
      your abilities.`,
  },
}

const PersonalTraining = (props) => {
  return (
    <section className="bg-gray-900">
      <div className="banner-about banner-h-sm bg-cover bg-bottom bg-no-repeat h-1/2 flex justify-center items-center">
        <div className="flex justify-center items-center text-5xl py-5 px-10 bg-red-500 opacity-80 rounded-full">
          <h2>Personal Training</h2>
        </div>
      </div>

      <div className="text-white">
        <p className="text-xl m-4">
          Your fitness journey does not have to be something that do alone. Our
          team of personal trainers is ready to do everything to help you
          achieve all of your fitness goals. Our staff is fully accredited with
          the latest in fitness training standards to help push through any
          roadblock you may encounter. From beginner to advanced, our trainers
          can help you no matter what your skill level is, and for a reasonable
          affordable price.
        </p>
      </div>
      {/* Types of training */}
      <div className='flex flex-wrap'>
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
        <div className="flex">
          <div className="w-1/2">
            {/* https://unsplash.com/photos/NXMZxygMw8o */}
            <img src={ptBench} alt="Personal Trainer Bench Press" />
          </div>
          <div className="w-1/2 text-white items-center">
            <h2 className="text-7xl text-center">Strength Training</h2>

            <p>
              Increase your strength; improve your life. <br />
              Whether you want to competively powerlift or simply improve your
              overall strength, our trainers can help you progressively improve
              your abilities.
            </p>

            <img
              className="rounded-2xl m-7"
              src={ptBench}
              alt="Personal Trainer Bench Press"
            />

            {/* https://unsplash.com/photos/NXMZxygMw8o */}
          </div>
        </div>
        <PtCard
          image={ptCardio}
          title={texts.bench.title}
          body={texts.bench.body}
        />
        <PtCard
          image={ptYoga}
          title={texts.bench.title}
          body={texts.bench.body}
        />
        <PtCard
          image={ptForm}
          title={texts.bench.title}
          body={texts.bench.body}
        />
        <PtCard
          image={ptBench}
          title={texts.bench.title}
          body={texts.bench.body}
        />
        <PtCard
          image={ptBench}
          title={texts.bench.title}
          body={texts.bench.body}
        />
      </div>
    </section>
  )
}

export default PersonalTraining
