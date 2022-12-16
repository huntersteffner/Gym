import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const MobileMenuLink = ({title, url}) => {
    return (
        <Link to={url} className="border-b border-red-300 mb-3 pb-3">{title}</Link>
    )
}

export default MobileMenuLink