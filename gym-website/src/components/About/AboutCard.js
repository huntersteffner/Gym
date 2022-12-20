const AboutCard = ({imageClass, title, text}) => {
    return (
        <div className="flex flex-col text-white m-7 h-[30rem] md:flex-row md:h-96">
            {/* Machine */}
            {/* https://unsplash.com/photos/-b4GeymbJl8 */}
            <div className={`h-3/5 ${imageClass} bg-no-repeat bg-cover bg-center md:h-full md:w-2/3`}>
              {/* <img className='w-full ' src={aboutPool} alt="" /> */}
            </div>
            <div className="flex flex-col bg-black test h-2/5 p-4 space-y-3 overflow-auto md:h-full md:w-1/3 md:justify-center">
              <h3 className=" text-2xl py-2 border-white border-b border-t md:text-xl">{title}</h3>
              <p className="text-lg md:text-[1rem]">{text}</p>
            </div>
          </div>
    )
}

export default AboutCard