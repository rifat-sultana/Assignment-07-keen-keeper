import { Link } from "react-router-dom";
import KeenKeeper from "../../assets/KeenKeeper.png"
import Home from "../../assets/Home.png";
import Clock from "../../assets/Clock.png";
import Stats from "../../assets/stats.png";

const Navbar = () => {

  return (
    <div className="bg-white  shadow-md">
   
      <div className="w-full px-10 py-3 flex justify-between items-center">
    
        <div className="flex items-center gap-2">
          <img src={KeenKeeper} alt="logo"  />
          
        </div>

     
        <div className="flex items-center px-8 gap-4">
          
          <Link
            to="/"
            className="flex items-center gap-1 bg-green-800 text-white px-4 py-1.5 rounded-md text-sm">
           <img src={Home} alt="Home"  /> Home
          </Link>

          <Link
            to="/timeline"
            className="flex items-center gap-1 text-gray-600 hover:text-black text-sm"
          >
            <img src={Clock} alt="Clock"/>Timeline
          </Link>

          <Link
            to="/stats"
            className="flex items-center gap-1 text-gray-600 hover:text-black text-sm"
          >
            <img src={Stats} alt="Stats"  /> Stats
          </Link>

        </div>
      </div>
    </div>
  );
};



export default Navbar;