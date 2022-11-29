const PtForm = () => {
    return <div className="m-2 ">
    <div>
      <form className="flex flex-col justify-center items-center">
        <h3 className="text-center text-5xl">
          Sign Up Today for a Free Personal Training Session
        </h3>
        <div className="flex flex-col md:flex-row space-x-10">
          <div className="flex flex-col">
            <h4 className="text-lg">Enter your name and email</h4>
            <div className='flex flex-col justify-evenly h-full w-full'>
              <label>Name</label>
              <input type="text" placeholder="Name" />
              <label >Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div>
            <h4 className="text-lg">
              What types of training are you interested in?
            </h4>
            <div className="flex flex-col">
              <label>Cardio</label>
              <input type="checkbox" />
              <label>Nutrition</label>
              <input type="checkbox" />
              <label>Physical Therapy</label>
              <input type="checkbox" />
              <label>Strength Training</label>
              <input type="checkbox" />
            </div>
          </div>
          <div>
            <h4 className="text-lg">
              Please select a tentative date and times of day that work best
              for you.
            </h4>
            <label>Date</label>
            <input type="date" />
            <div className="flex flex-col">
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
        </div>
        <input
          className="bg-blue-300 rounded-full text-lg m-4 py-2 w-1/2 self-center cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  </div>
}

export default PtForm