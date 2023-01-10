import { useMediaQuery } from 'react-responsive'
import BannerText from '../components/BannerText'

import Calendar from '../components/GroupClasses/Calendar'
import MobileCalendar from '../components/GroupClasses/MobileCalendar'

const GroupClasses = () => {
  const isComputer = useMediaQuery({
    query: '(min-width: 768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  return (
    <>
      <div className="banner-group-classes banner-h-sm bg-cover bg-center  bg-no-repeat h-1/2 flex justify-center items-center">
        <BannerText title="Group Classes" />
      </div>
      <section className="flex flex-col justify-center p-4 items-center h-36 bg-black text-white  text-center space-y-3 md:h-60">
        <h2 className="text-md md:text-4xl">
          Check out our schedule of Group Classes below
        </h2>
        <p className="text-sm md:text-2xl">
          No signup needed. Come enjoy your fitness journey with outhers!
        </p>
      </section>
      <section>
        {isComputer && <Calendar />}
        {isMobile && <MobileCalendar />}
      </section>
    </>
  )
}

export default GroupClasses
