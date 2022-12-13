import { useState } from 'react'

const MobileCalendar = () => {
  const [dayOfWeek, setDayOfWeek] = useState('Monday')

  const weekHandler = (e) => {
    setDayOfWeek(e.target.value)
  }
  return (
    <div className="container mx-auto mt-10">
      <div className="wrapper bg-white rounded shadow w-full">
        <div className="header flex justify-center space-x-3 border-b p-2">
          <span>Select Day</span>
          <select onChange={weekHandler} name="days" id="days">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        {/* Top Row */}
        <div className="w-full">
          <div className="flex justify-center p-2 border-r h-10">
            <h2>
              <span id="day-of-week">{dayOfWeek}</span>'s Classes
            </h2>
          </div>
        </div>
        {/* List of classes */}
        <ul className="mobile-calendar">
          <li className="flex justify-between items-center border py-3 px-4 cursor-pointer odd:bg-gray-100">
            <h1>Class A</h1>
            <h1>8-9 AM</h1>
          </li>
          <li className="flex justify-between items-center border py-3 px-4 cursor-pointer odd:bg-gray-100">
            <h1>Class B</h1>
            <h1>8-9 AM</h1>
          </li>
          <li className="flex justify-between items-center border py-3 px-4 cursor-pointer odd:bg-gray-100">
            <h1>Class C</h1>
            <h1>8-9 AM</h1>
          </li>
          <li className="flex justify-between items-center border py-3 px-4 cursor-pointer odd:bg-gray-100">
            <h1>Class D</h1>
            <h1>8-9 AM</h1>
          </li>
          <li className="flex justify-between items-center border py-3 px-4 cursor-pointer odd:bg-gray-100">
            <h1>Class E</h1>
            <h1>8-9 AM</h1>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileCalendar
