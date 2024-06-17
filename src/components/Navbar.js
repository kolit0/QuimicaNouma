import {Fragment} from "react";
import Flyout from "./flyout";

function email() {
  window.location.href=`mailto:contacto@noumatrading.com.ve`
}

const Navbar = () => {
    return(

  <nav className="flex items-center">
    <ul className="md:text-xl text-sm text-gray-300 flex justify-between mr-5">
      <li>
        <button id="correo" className="text-white px-6 py-2 bg-indigo-800 rounded-xl hover:bg-white hover:text-blue-900 font-semibold duration-300 ease-in-out mx-2" onClick={email}>Contactanos</button>
      </li>
      <li>
        <Fragment>
          <Flyout />
        </Fragment>
      </li>
    </ul>

  </nav>
    )
}

export default Navbar;