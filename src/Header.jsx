import {LuTerminal} from "react-icons/lu";

function Header() {

  return (
    <header>
      <LuTerminal/>
      <h3>Cameron Jamieson</h3>

      <p>About</p>
      <p>Projects</p>
      <p>Resume</p>
      <p>Gunpla</p>
    </header>
  );

  /** TODO
   * May convert this to a pullout vertical nav,
   * Just need to get back into the flow of working
   * on this again after a break.
   */
}

export default Header;