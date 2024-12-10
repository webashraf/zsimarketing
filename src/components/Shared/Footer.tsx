import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-t-[#da9100] text-black py-10 lg:px-0 px-5">
      <div className="mx-auto flex flex-wrap gap-8 lg:max-w-[1480px]">
        {/* Column 1 */}
        <div className="lg:w-[30%]">
          <h3 className="font-mono uppercase text-3xl">zsimarketing</h3>
          <p className="text-sm leading-relaxed">
            Spanning from the bustling energy of New York to over 300 cities
            worldwide, RPC Limo is your trusted partner in sophisticated travel
            logistics. We pledge to provide a smooth transition from the outset
            of your journey to its conclusion, ensuring every leg of your trip
            is executed with precision and elegance.
          </p>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
            Book Now Pay Later
          </button>
        </div>

        {/* Column 2 */}
        <div className="lg:w-[20%]">
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Our Fleet
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Book A Ride
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="lg:w-[20%]">
          <h3 className="text-lg font-bold mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Corporate Travel
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Airport Transfer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wedding Transfer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Charter Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cruise Port Transfer
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="lg:w-[30%]">
          <h3 className="text-lg font-bold mb-4">Download Apps</h3>
          <div className="flex items-center gap-4 mb-4">
            <Image
              height={50}
              width={150}
              src="https://i.ibb.co/pdn8JCD/download.png"
              alt="App Store"
              className=" h-auto"
            />
            <Image
              height={50}
              width={165}
              src="https://i.ibb.co/0BXDXD0/get-it-on-google-play-badge.png"
              alt="Google Play"
              className=" h-auto"
            />
          </div>
          <p className="text-sm mb-2">
            If you are a rider or want to use our platform to ride, please
            download RPC LIMO app.
          </p>
          <p className="text-sm">
            If you are a driver or want to drive with us, please download RPC
            DRIVER app.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm border-t border- pt-4 lg:w-[1220px] mx-auto">
        <p>Copyright © zsi marketing 2024 - Developed by ali</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-300">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-300">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
