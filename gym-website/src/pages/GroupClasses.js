import { useMediaQuery} from 'react-responsive'

import Calendar from '../components/GroupClasses/Calendar'
import MobileCalendar from '../components/GroupClasses/MobileCalendar'

const GroupClasses = () => {

  const isComputer = useMediaQuery({
    query: '(min-width: 768px)'
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })
  return (
    <>
    <div className='banner-group-classes banner-h-sm bg-cover bg-center  bg-no-repeat h-1/2 flex justify-center items-center'></div>
    <div className='h-screen'></div>
      {isComputer && <Calendar />}
      {isMobile && <MobileCalendar/>}
    </>
  )
}

export default GroupClasses
