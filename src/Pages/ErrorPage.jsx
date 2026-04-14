import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      
      <div className="text-center max-w-lg">
        
        <h1 className="text-7xl font-extrabold text-gray-600 animate-bounce ">404</h1>

       
        <h2 className=" bg-gradient-to-br from-gray-100 to-gray-200 text-2xl font-semibold mt-4 text-gray-700">
          Oops! Page not found
        </h2>

    
        <p className="text-gray-500 mt-2 font-bold">
          The page is temporarily unavailable.
        </p>

    
        <Link to="/">
          <button className="mt-6 font-bold bg-green-800 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;