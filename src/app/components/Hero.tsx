import Button from "./Button";
import Image from "next/image";
export default function Hero(){
    return(
        <div className="lg:h-[663px] w-full sm:h-[630px]  relative lg:top-[70px] lg:bg-[url('/hero-1.png')] h-[853px]  top-[60px] bg-[#F2F0F1] overflow-x-hidden">
            <div className="sm:flex ">
            <div>
            <h3 className="h-[93px] w-[315px] relative top-[30px] left-[16px] lg:h-[173px]  lg:w-[577px]  lg:top-[100px] lg:left-[100px] text-[36px] lg:text-[60px]  font-bold text-[#000000] leading-[34px] lg:leading-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h3>
            <p className="text-[#00000099]  text-[14px] h-[50px] relative w-[358px] lg:h-[33px] lg:w-[548px] top-[50px] lg:top-[140px] left-[16px] lg:left-[100px] lg:text-[15px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <div className=" relative top-[60px]  lg:top-[160px] left-4 lg:left-[100px]"><Button text={"Shop Now"} bgColor="bg-black" textcolor="text-white"/></div>
            <div className=" relative lg:flex lg:top-[110px] lg:left-[80px] lg:h-[74px] lg:w-[595px]  ">
            <div className="relative h-[52px] w-[278px]  top-[110px] left-[56px] flex justify-between lg:space-x-7 ">
            <div className=" h-[48px] w-[113px] lg:h-[74px] lg:w-[141px]">
            <h4 className="text-[24px] lg:text-[30px] font-bold">200+</h4>
            <p className="text-[#00000099] text-[12px]">International Brands</p>
            </div>
            <div className=" border-l-2 border-[#0000001A] sm:hidden"></div>
            <div className=" h-[48px] w-[125px] lg:h-[74px] lg:w-[159px]">
            <h4 className="text-[24px] font-bold lg:text-[30px]">2,000+</h4>
            <p className="text-[#00000099] text-[12px] ">High-Quality Products</p>
            </div>
            </div>
            <div className=" h-[48px] w-[125px] relative top-[130px] lg:top-[110px] left-[127px] lg:left-[80px] lg:h-[74px] lg:w-[171px]">
            <h4 className="text-[24px] font-bold lg:text-[30px]">30,000+</h4>
            <p className="text-[#00000099] text-[12px] ">Happy Customers</p>
            </div>
            </div>
            </div>
            <Image className="mt-[140px] sm:mt-[180px] lg:hidden " src={"/for-mobile.png"} alt="heropic" height={448} width={390} />
            </div>
            </div>
    )
}