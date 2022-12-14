const CalendarItem = ({text, time}) => {
  return (
    <div class="event bg-blue-400 text-white rounded p-1 text-sm mb-1">
      <span class="event-name">{text}</span>
      <span class="time">{time}</span>
    </div>
  )
}

export default CalendarItem
