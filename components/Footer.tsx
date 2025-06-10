"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
FaWhatsapp,
} from "react-icons/fa";
import CustomButton from "./CustomButton";

<style jsx>{`
  .icon-item {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .icon-container {
    width: 1.25rem; /* Adjust as needed */
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-container svg {
    width: 100%;
    height: 100%; 
  }
`}</style>



const addressLines = [
  "Redhills, Chennai, India",
];
const addressElements = addressLines.map((line, index) => (
  <span key={index}>{line}<br/></span>
));

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary-200 pt-12 md:pt-24">
      <div className="container mx-auto pb-12 md:pb-24 px-4 md:px-8">
        <div className="text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
          {/* info */}
          <div className="flex flex-col gap-4">
            <Link href="">
              <Image
                src="/assets/img/DatteTech_Logo.png"
                width={100}
                height={100}
                alt="DatteTech Logo"
              />
            </Link>
            <p className="max-w-sm text-sm md:text-base">
              Dattetech helps you forge your brand's destiny, build your digital Hidden Village, and master your entrepreneurial chakra for Hokage-level success!
            </p>
            <ul className="flex flex-col gap-4 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="icon-container">
                <FaMapMarkerAlt className="text-lg md:text-xl text-accent" />
                </span>
                <div>
                  {addressElements}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span className="icon-container">
                <FaEnvelope className="text-lg md:text-xl text-accent" />
                </span>
                <span>dattetech@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="icon-container">
                <FaPhoneAlt className="text-lg md:text-xl text-accent" />
                </span>
                <span>+91 8667701001</span>
              </li>
              <li className="flex items-center gap-2">
                  <span className="icon-container">
                  <FaInstagram className="text-lg md:text-xl text-accent" />
                  </span>
                  <a href="https://www.instagram.com/datte_tech/">
                  <span>@datte_tech</span>
                  </a>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div>
            <h4 className="h4 text-accent mb-4 text-lg md:text-xl">
              Newsletter
            </h4>
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base">
                Join our community & get exclusive fitness tips and 
                special offers delivered right to your inbox.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[40px] md:h-[50px] outline-none px-4 text-primary-300 w-full max-w-[200px] md:max-w-[300px] rounded-l-md"
                />
                <CustomButton
                  buttonStyles="h-[40px] md:h-[50px] px-4 md:px-8 rounded-r-md"
                  text="Send"
                />
              </form>
            </div>
          </div>

          {/* location map */}
          <div>
            <h4 className="h4 text-accent mb-4 text-lg md:text-xl">
              Location Map
            </h4>
            <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg h-[200px] md:h-[300px]">
              <a href="https://maps.app.goo.gl/6dDcpfzJEMmspv2X8">
              <Image
                src="/assets/img/contact/map.png"
                alt="Location map"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* socials */}
      <div className="text-white border-t border-white/20 py-6 md:py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
          <span className="text-xs md:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} DAP Fitness. All rights reserved.
            <a href="https://sites.google.com/view/h24creationz-business-card/home" target="_blank" className="text-gray-200 hover:text-accent transition-all">
             &#9889;H24 Creationz
            </a>
          </span>
          <ul className="flex gap-4 text-lg md:text-xl mt-4 md:mt-0">
            
            <li>
              <Link
                href=""
                className="text-white hover:text-accent transition-all"
              >
                <FaFacebook />
              </Link>
            </li>
            
            <li>
                <a href="https://www.instagram.com/datte_tech/"
                  className="text-white hover:text-accent transition-all"
                  >
                <FaInstagram />
                </a>
            </li>

{/*             <li>
              <Link
                href="#"
                className="text-white hover:text-accent transition-all"
              >
                <FaInstagram />
              </Link>
            </li> */}
            
            <li>
              <Link
                href=""
                className="text-white hover:text-accent transition-all"
              >
                <FaYoutube />
              </Link>
            </li>

            <li>
                <a href="https://wa.me/8667701001?text=Hi%20there!%20I'm%20interested%20to%20know%20more%20about%20DatteTech%20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="fixed bottom-4 right-5 z-50 bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition duration-300 ease-in-out hover:transform hover:scale-110">
                  <FaWhatsapp style={{ width: '27px', height: '27px' }}/>
                </a>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
