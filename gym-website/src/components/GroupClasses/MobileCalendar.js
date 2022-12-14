import { useState } from 'react'

import GroupClassesData from '../../data/GroupClassesData'
import MobileCalendarLI from './MobileCalendarLI'

const MobileCalendar = () => {
  const [dayOfWeek, setDayOfWeek] = useState('Monday')
  const [mobileList, setMobileList] = useState(
    <MobileCalendarLI text={'Testing'} time="Time man" />
  )

  let dayObject

  let laLista

  const weekHandler = (e) => {
    setDayOfWeek(e.target.value)
    const curDay = GroupClassesData.filter((day) => day.day === e.target.value)
    dayObject = curDay[0].classes
    // const classesList = () => {
    //   return dayObject.map((day) => (
    //     <MobileCalendarLI key={day.id} text={day.text} time={day.time} />
    //   ))
    // }
    setMobileList(
      dayObject.map((day) => (
        <MobileCalendarLI key={day.id} text={day.text} time={day.time} />
      ))
    )
    return laLista
  }
  // const mobileCalendarHandler = () => {
  //   return dayObject.map((day) => (
  //     <MobileCalendarLI key={day.id} text={day.text} time={day.time} />
  //   ))
  // }

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
        <ul className="mobile-calendar">{mobileList}</ul>
      </div>
    </div>
  )
}

export default MobileCalendar
