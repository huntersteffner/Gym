const CareersCard = ({ image, title, text, responsibilities }) => {
  return (
    <div className="bg-blue-100 w-2/3">
      <img src={image} alt="Job" />
      <div className="m-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="text-lg">
          <p>{text}</p>
          <p className="underline">Responsabilities Include</p>
          <ul>
            {responsibilities.map((responsability) => (
              <li className="ml-3" key={responsability.key}>
                {responsability.li}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center w-full">
          <label className="w-[15rem]">Add your Resume</label>
          <input type="file" />
        </div>
        <button className="bg-red-300 rounded-xl w-full py-2">Submit</button>
      </div>
    </div>
  )
}

export default CareersCard
