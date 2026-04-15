
import InstagramImage from "../../assets/Instagram.png";
import FacebookImage from "../../assets/Facebook.png";
import TwitterImage from "../../assets/Twitter.png";



const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 mt-10">
      <div className="max-w-5xl mx-auto text-center space-y-6">

     
        <h2 className="text-5xl font-bold">KeenKeeper</h2>

   
        <p className="text-[14px] text-gray-200 mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div>
          <p className="mb-2 text-sm">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
              <span> <img src={InstagramImage} alt="InstagramImage"/> </span>
            </div>

            <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
              <span> <img src={FacebookImage} alt="FacebookImage"/> </span>
            </div>

            <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
              <span> <img src={TwitterImage} alt="TwitterImage"/> </span>
            </div>
          </div>
        </div>


        {/* Bottom part */}
        <div className="flex justify-between items-center text-xs text-gray-300 mt-6">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">
              Privacy Policy
              </span>

            <span className="hover:underline cursor-pointer">
              Terms of Service
              </span>

            <span className="hover:underline cursor-pointer">
              Cookies
              </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;