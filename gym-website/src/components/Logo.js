import { IoBarbell } from 'react-icons/io5'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Logo = () => {
    
    return (
        <Link to="/" className="flex flex-col self-start justify-center items-center">
        <div>
          <IoBarbell className="text-6xl" />
        </div>
        <div>
          <p className="text-3xl">Local Gym</p>
        </div>
      </Link>
    )
}

export default Logo