import { Link } from "react-router-dom";

export default function NavItem(props) {

  return (
    <li className="nav-item">
      <Link className={props.route.className} to={props.route.link}>
          {props.route.name}
          <span className="sr-only"></span>
      </Link>
    </li>
  )
}