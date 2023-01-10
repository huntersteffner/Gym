import Button from '../Button'

const PtFormUnfilled = () => {
  return (
    <div className="bg-amber-800 text-white md:rounded-lg">
      <form className="flex flex-col justify-center items-center p-2">
        <h3 className="text-3xl text-center md:text-5xl">
          Sign Up Today for a Free Personal Training Session
        </h3>
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="flex flex-col ">
            <h4 className="text-lg text-center ">Enter your name and email</h4>
            <div className="flex flex-col justify-evenly h-full w-full space-y-2 md:space-y-0">
              <input type="text" placeholder="Name" />
              <input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className='flex flex-col items-center md:w-1/2'>
            <h4 className="text-lg">
              What types of training are you interested in?
            </h4>
            <div className="flex flex-col w-[70%]">
              <div className='form-checkbox-div'>
                <label>Cardio</label>
                <input type="checkbox" />
              </div>
              <div className='form-checkbox-div'>
                <label>Nutrition</label>
                <input type="checkbox" />
              </div>
              <div className='form-checkbox-div'>
                <label>Physical Therapy</label>
                <input type="checkbox" />
              </div>
              <div className='form-checkbox-div'>
                <label>Strength Training</label>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center w-full'>
            <h4
              
              className="text-lg"
            >
              Please select a tentative date and times of day that work best for
              you.
            </h4>
            <input className='w-[80%]' type="date" />
            <div className='flex flex-col w-[70%]'>
                <div className="form-checkbox-div">
                  <label>6 AM - 9 AM</label>
                  <input type="checkbox" />
                </div>
                <div className="form-checkbox-div">
                  <label>9 AM - Noon</label>
                  <input type="checkbox" />
                </div>
                <div className="form-checkbox-div">
                  <label>Noon - 4 PM</label>
                  <input type="checkbox" />
                </div>
                <div className="form-checkbox-div">
                  <label>4 PM - 7 PM</label>
                  <input type="checkbox" />
                </div>
                <div className="form-checkbox-div">
                  <label>7 PM - 10 PM</label>
                  <input type="checkbox" />
                </div>
              </div>
          </div>
        </div>
        {/* <Button
          onSubmit={() => {
            console.log('It worked')
          }}
        /> */}
        <button className="btn md:w-1/2 lg:w-1/3">Submit</button>
      </form>
    </div>
  )
}

export default PtFormUnfilled
