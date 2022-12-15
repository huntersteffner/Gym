import Calendar from '../components/GroupClasses/Calendar'
import MobileCalendar from '../components/GroupClasses/MobileCalendar'

const GroupClasses = () => {
  return (
    <>
    <div className='banner-group-classes banner-h-sm bg-cover bg-center  bg-no-repeat h-1/2 flex justify-center items-center'></div>
    <div className='h-screen'></div>
      <Calendar />
      <MobileCalendar/>
    </>
  )
}

export default GroupClasses
