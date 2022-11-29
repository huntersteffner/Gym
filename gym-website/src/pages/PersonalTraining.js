import ptBench from '../img/personal-training-bench.jpg'
import ptYoga from '../img/personal-training-yoga.jpg'
import ptCardio from '../img/personal-training-treadmill.jpg'
import ptForm from '../img/personal-training-form-check.jpg'
import ptNutrition from '../img/personal-training-nutrition.jpg'
import PtCard from '../components/PtCard'

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

const PersonalTraining = (props) => {
  return (
    <section className="bg-gray-900 text-white">
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
        <div className="md:grid md:grid-cols-2 md:gap-1">
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
      <div className="h-screen w-20">
        <h1>Hello</h1>
      </div>
      <div>
        <h3>Sign Up Today for a Free Personal Training Session</h3>
        <form>
          <div>
            <input type="email" id="email" placeholder="Email" />
            <label id="email">Enter your Email</label>
          </div>
          <div>
            <label>Cardio</label>
            <input type="checkbox" />
            <label>Nutrition</label>
            <input type="checkbox" />
            <label>Physical Therapy</label>
            <input type="checkbox" />
            <label>Strength Training</label>
            <input type="checkbox" />
          </div>
          <div>
            <label Date></label>
            <input type="date" />
            <div>
              <label>6 AM - 9 AM</label>
              <input type="checkbox" />
              <label>9 AM - Noon</label>
              <input type="checkbox" />
              <label>Noon - 4 PM</label>
              <input type="checkbox" />
              <label>4 PM - 7 PM</label>
              <input type="checkbox" />
              <label>7 PM - 10 PM</label>
              <input type="checkbox" />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PersonalTraining
