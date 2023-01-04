import { useState } from "react"

const CareersCard = ({ image, title, text, responsibilities }) => {

  const [resume, setResume] = useState(false)

  const resumeHandler = (e) => {
    setResume(true)
  }

  return (
    <div className="container text-white bg-amber-800 md:w-2/3">
      <img src={image} alt="Job" />
      <div className="m-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="text-lg">
          <p>{text}</p>
          <p className="underline">Responsabilities Include:</p>
          <ul>
            {responsibilities.map((responsability) => (
              <li className="ml-3" key={responsability.key}>
                {responsability.li}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center w-full">
          {/* <label className="w-[15rem]">Add your Resume</label>
          <input className="formInputFile" type="file" /> */}
          <div className="relative overflow-hidden inline-block">
              <button className="border-4 px-4 py-6 rounded-full font-bold text-xl">Upload Resume</button>
              <input onChange={resumeHandler} id="resume" type="file" name="resume" />
              <div className="text-xl">{resume && '✅ File Selected'}</div>
          </div>
        </div>
        <button className="btn">Submit</button>
      </div>
    </div>
  )
}

export default CareersCard
