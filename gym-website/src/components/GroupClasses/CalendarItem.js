const CalendarItem = ({ text, time, background }) => {
  // return (
  //   <div class="event bg-blue-400 text-white rounded p-1 text-sm mb-1">
  //     <span class="event-name">{text}</span>
  //     <span class="time">{time}</span>
  //   </div>
  // )
  return (
    <li className={`${background} text-white rounded p-1 text-sm mb-1 list-none`}>
      <p>{text}</p>
      <p>{time}</p>
    </li>
  )
}

export default CalendarItem
