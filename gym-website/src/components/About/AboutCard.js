const AboutCard = ({imageClass, title, text}) => {
    return (
        <div className="text-white m-7 h-[50vh]">
            {/* Machine */}
            {/* https://unsplash.com/photos/-b4GeymbJl8 */}
            <div className={`h-2/3 ${imageClass} bg-no-repeat bg-cover bg-center`}>
              {/* <img className='w-full ' src={aboutPool} alt="" /> */}
            </div>
            <div className="flex flex-col items-start bg-black test h-1/3 p-4 space-y-3">
              <h3 className=" text-3xl w-20 py-2 border-white border-b border-t">{title}</h3>
              <p className="text-xl">{text}</p>
            </div>
          </div>
    )
}

export default AboutCard