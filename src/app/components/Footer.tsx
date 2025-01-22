import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import Image from "next/image"
import Offers from "./Offers";

export default function Footer(){
    return(
      <>
      <Offers/>
      <div className="w-full bg-[#F0F0F0] overflow-hidden">
      <div className="w-full lg:h-[440px] sm:h-auto h-auto flex flex-col items-center lg:pt-[130px] sm:pt-[50px] pt-[30px] overflow-x-hidden">
      {/* Header Section */}
      <div className="lg:flex lg:justify-between w-full max-w-[1200px] px-4 sm:px-10">
      <div className="lg:w-1/3">
      <h3 className="text-[33px] lg:text-[35px] font-bold text-[#000]">SHOP.CO</h3>
      <p className="lg:pt-5 pt-4 text-sm text-[#000000CC]">
      We have clothes that suits your style and which you’re proud to wear.
      From women to men.
      </p>
      {/* Social Media Icons */}
      <div className="flex gap-4 mt-4">
      <div className="h-[35px] w-[35px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
      <IoLogoTwitter />
      </div>
      <div className="h-[35px] w-[35px] rounded-full bg-[#000] text-white flex items-center justify-center">
      <RiFacebookFill />
      </div>
      <div className="h-[35px] w-[35px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
      <FaInstagram />
      </div>
      <div className="h-[35px] w-[35px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
     <IoLogoGithub />
     </div>
     </div>
      </div>

      {/* Links Section */}
      <div className="md:flex flex-wrap gap-10 mt-10 lg:mt-0">
        {/* Company Links */}
        <div className="lg:w-[150px]">
          <h5 className="text-[18px] font-bold tracking-[2px] mb-4">COMPANY</h5>
          <ul className="text-[#00000099] space-y-2 text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="lg:w-[150px]">
          <h5 className="text-[18px] font-bold tracking-[2px] mb-4">HELP</h5>
          <ul className="text-[#00000099] space-y-2 text-sm">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ Links */}
        <div className="lg:w-[150px]">
          <h5 className="text-[18px] font-bold tracking-[2px] mb-4">FAQ</h5>
          <ul className="text-[#00000099] space-y-2 text-sm">
            <li>Account</li>
            <li>Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="lg:w-[150px]">
          <h5 className="text-[18px] font-bold tracking-[2px] mb-4">RESOURCES</h5>
          <ul className="text-[#00000099] space-y-2 text-sm">
            <li>Free eBooks</li>
            <li>Developer Tutorials</li>
            <li>How to - Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Section */}
    <div className="w-full border-t border-[#0000001A] mt-10"></div>
    <div className="w-full max-w-[1200px] px-4 sm:px-10 flex flex-col lg:flex-row items-center justify-between mt-5">
      <div className="text-[14px] text-[#00000099]">
        Shop.co © 2000-2023, All Rights Reserved
      </div>
      <div className="h-[30px] w-[281px] mt-4 lg:mt-0 flex">

      <Image
        src="/logo1.png"
        alt="logo1"
        height={30}
        width={56}
        
      /> 
       <Image
        src="/logo2.png"
        alt="logo2"
        height={30}
        width={56}
        
      /> 
       <Image
        src="/logo3.png"
        alt="logo3"
        height={30}
        width={56}
        
      /> 
       <Image
        src="/logo4.png"
        alt="logo4"
        height={30}
        width={56}
        
      />  <Image
      src="/logo5.png"
      alt="logo5"
      height={30}
      width={56}
      
    /> 
      </div>
      
    </div>
  </div>
</div>

        </>
    )
}