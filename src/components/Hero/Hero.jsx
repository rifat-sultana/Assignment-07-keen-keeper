
const HeroSection = () => {
  return (
  
    <div className="bg-gray-50 py-16 text-center">
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture 
        the relationships that matter most.
      </p>

      <button className="mt-6 bg-green-800 text-white px-5 py-2 rounded-md text-sm hover:bg-green-600">
        + Add a Friend
      </button>

    </div>
  );
};

export default HeroSection;