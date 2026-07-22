import {Link} from "react-router";

function Header() {

  return (
    <header>
        <h2>Cameron Jamieson</h2>
        <div className={"nav-bar"}>
            <Link to={'/'}>About</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/resume'}>Resume</Link>
            <Link to={'/gunpla'}>Gunpla</Link>
        </div>
    </header>
  );

  /** TODO
   * May convert this to a pullout vertical nav,
   * Just need to get back into the flow of working
   * on this again after a break.
   */
}

export default Header;