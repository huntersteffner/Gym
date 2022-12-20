import { Link } from "react-router-dom"

const AboutTrainingCard = ({image, alt, reverse}) => {
    return (
        <div className={`flex flex-col justify-between items-center text-center text-white bg-black md:w-screen md:h-[20rem] ${reverse ? 'md:flex-row-reverse': 'md:flex-row'}`}>
            <div className='h-full md:w-[17rem] lg:w-[28rem] xl:w-[40rem]'>
              <img className='w-full h-full object-cover' src={image} alt={alt} />
            </div>
            
            <div className="flex flex-col justify-center items-center h-28 md:h-full md:p-4" >
              <h3>Personal Training</h3>
              <button>
                <Link to="/personal-training">Click Here</Link>
              </button>
            </div>
          </div>
    )
}

export default AboutTrainingCard