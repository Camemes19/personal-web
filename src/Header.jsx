import {Link} from "react-router";
import {TfiDownload} from "react-icons/tfi";

function Header() {

  return (
    <header className={"border-b border-b-blue-700"}>
        <h2 className={"mx-3"}>Cameron Jamieson</h2>
        <div className={"nav-bar items-center"}>
            <Link to={'/'} className={"text-white hover:text-gray-400"}>About</Link>
            <Link to={'/projects'} className={"text-white hover:text-gray-400"}>Projects</Link>
            <Link to={'/gunpla'} className={"text-white hover:text-gray-400"}>Gunpla</Link>
        </div>
        <button className={"flex bg-blue-700 justify-evenly items-center text-xl hover:text-gray-400"}>
            <TfiDownload className={"m-3"}/>
            <p className={"m-3"}>Resume</p>
        </button>
    </header>
  );

  /** TODO
   * May convert this to a pullout vertical nav,
   * Just need to get back into the flow of working
   * on this again after a break.
   */
}

export default Header;