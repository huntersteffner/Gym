import GroupClassesData from '../../data/GroupClassesData'
import CalendarItem from './CalendarItem'

const Calendar = () => {
  const mondayClasses = GroupClassesData[0].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} background={item.background} />
  ))
  const tuesdayClasses = GroupClassesData[1].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} background={item.background} />
  ))
  const wednesdayClasses = GroupClassesData[2].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} background={item.background} />
  ))
  const thursdayClasses = GroupClassesData[3].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} background={item.background} />
  ))
  const fridayClasses = GroupClassesData[4].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} background={item.background} />
  ))
  const saturdayClasses = GroupClassesData[5].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} background={item.background} />
  ))
  const sundayClasses = GroupClassesData[6].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} background={item.background} />
  ))

  return (
    <div className="container mx-auto mt-10">
      {/* Head */}
      <div className="flex justify-between items-start">
        <div className="calendar-column">
          <div className="calendar-head">Sunday</div>
          <ul className="flex flex-col">
            {sundayClasses}
          </ul>
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Monday</div>
          {mondayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Tuesday</div>
          {tuesdayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Wednesday</div>
          {wednesdayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Thursday</div>
          {thursdayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Friday</div>
          {fridayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Saturday</div>
          {saturdayClasses}
        </div>
      </div>
    </div>
  )
}

export default Calendar
