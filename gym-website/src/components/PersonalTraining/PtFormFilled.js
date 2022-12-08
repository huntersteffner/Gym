import squat from '../../img/squat.jpg'

const PtFormFilled = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-3 pl-4 pr-4 md:flex-row">
          <div className="space-y-7 text-center">
            <h1 className="text-3xl">
              Thank you! We're excited to partner with you on your fitness journey.
            </h1>
            <h2 className="text-2xl">
              One of our Personal Trainers will follow-up with you shortly.
            </h2>
          </div>
          {/* https://unsplash.com/photos/Z4Q9KHw9ofE */}
    
          <img className="w-2/3 md:w-1/2" src={squat} alt="" />
        </div>
      )
}

export default PtFormFilled