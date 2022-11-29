import ptBench from '../img/personal-training-bench.jpg'
import ptYoga from '../img/personal-training-yoga.jpg'
import ptCardio from '../img/personal-training-cardio.jpg'
import ptForm from '../img/personal-training-form-check.jpg'
import PtCard from '../components/PtCard'

const texts = {
  form: {
    title: 'Physical Therapy',
    body: `If you're recovering from an injury, we can assist you with rehabilitation to get back to normal faster.`
  },
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
      <div className="flex flex-wrap">
        <div className="md:grid md:grid-cols-2 md:gap-3">
          {/* https://unsplash.com/photos/y7ywDXWJ-JU */}
          <PtCard
            image={ptCardio}
            title={texts.bench.title}
            body={texts.bench.body}
          />
          {/* https://unsplash.com/photos/kufLAiPoIlI */}
          <PtCard
            image={ptYoga}
            title={texts.bench.title}
            body={texts.bench.body}
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
          {/* https://unsplash.com/photos/NXMZxygMw8o */}
          <PtCard
            image={ptBench}
            title={texts.bench.title}
            body={texts.bench.body}
          />
        </div>
      </div>
    </section>
  )
}

export default PersonalTraining
