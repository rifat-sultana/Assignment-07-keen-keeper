
import StatsData from "../components/StatsData/StatsData";
import HeroSection from "../components/Hero/Hero";
import Friends from "../Pages/friends";



const Home = () => {
  return (

    <div className="bg-gray-100 min-h-screen py-10">

      <HeroSection />
      <StatsData /> 
      <Friends/>
 
    </div>
  );
};

export default Home;