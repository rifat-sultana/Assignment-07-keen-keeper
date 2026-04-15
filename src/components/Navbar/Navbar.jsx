import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import KeenKeeper from "../../assets/KeenKeeper.png"
import Home from "../../assets/Home.png";
import Clock from "../../assets/Clock.png";
import Stats from "../../assets/stats.png";

const Navbar = () => {

  return (
    <div className="bg-white  shadow-lg">
   
      <div className="w-full px-10 py-3 flex justify-between items-center">
    
        <div className="flex items-center gap-2">
          <img src={KeenKeeper} alt="logo"  />
          
        </div>

     
        <div className="flex items-center px-8 gap-4">

          {/* Home  */}
         <NavLink
          to="/"
            className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-1.5 rounded-md text-sm ${
             isActive ? "bg-green-800 text-white" : "text-gray-600"
             }` }>

            <img src={Home} alt="Home" className="text-gray-200" />
              Home
              </NavLink>

              {/* Timeline */}

          <NavLink
          to="/timeline"
            className={({ isActive }) =>
           `flex items-center gap-1 px-4 py-1.5 rounded-md text-sm ${
            isActive ? "bg-green-800 text-white" : "text-gray-600"
           }` }>

            <img src={Clock} alt="Clock" />
              Timeline
                </NavLink>

                {/* Stats */}

          <NavLink
          to="/stats"
            className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-1.5 rounded-md text-sm ${
            isActive ? "bg-green-800 text-white" : "text-gray-600"
            }` }>

            <img src={Stats} alt="Stats" />
              Stats
               </NavLink>

        </div>
      </div>
    </div>
  );
};



export default Navbar;