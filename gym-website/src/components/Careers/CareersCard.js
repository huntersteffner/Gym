const CareersCard = ({image, title, text}) => {
    return (
        <div className="bg-blue-100 w-2/3">
          <img src={image} alt="" />
          <div className='m-4'>
            <h3 className='font-bold text-2xl'>{title}</h3>
            <p className='text-lg'>
              {text}
            </p>
            <div className='flex justify-between items-center w-full'>
              <label className='w-[15rem]' >Add your Resume</label>
              <input  type="file" />
            </div>
            <button className="bg-red-300 rounded-xl w-full py-2">Submit</button>
          </div>
        </div>
    )
}

export default CareersCard