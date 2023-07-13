import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Home.css';

export default function Navbar() {
  return (
    <nav className="nav" style={{backgroundColor:"white"}}>
      <ul>
      <Link to="/" className="site-title" style={{fontSize: 50}}>
        Book my stay
      </Link>
      <li><a href="#">Home</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Review</a></li>
      <li><a href="#">About</a></li>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
