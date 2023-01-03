import BannerText from '../components/BannerText'

import {GrYoga} from 'react-icons/gr'

const Membership = () => {
  return (
    <>
      <div className="banner-membership banner-h-sm bg-cover bg-center  bg-no-repeat h-1/2 flex justify-center items-center">
        <BannerText title="Membership" />
      </div>
      <div className=" bg-black text-white">
        <h1>
          Become a Member Today! <a href="#test">Test</a>
        </h1>
        <div>
          <div>
            <GrYoga className='text-white' />
            <p>Group Classes</p>
          </div>
          <div>
            <p>Top of the Line Equipment</p>
          </div>
          <div>
            <p>Swimming</p>
          </div>
          <div>
            <p>Great Community</p>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
      <div id="test"></div>
    </>
  )
}

export default Membership
