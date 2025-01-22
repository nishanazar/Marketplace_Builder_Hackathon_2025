import Image from "next/image";
export default function DressStyle(){
    return(
            <div className="lg:w-[1239px] lg:h-[780px] sm:w-[839px] sm:h-[680px] w-full h-[975px] rounded-[40px] relative bg-[#F0F0F0] top-[110px] lg:m-0 ml-4 lg:left-[80px] overflow-x-hidden">
            <h3 className="sm:w-[687px] sm:h-[58px] w-[246px] h-[72px] relative font-bold sm:text-[48px] text-[35px] sm:leading-[57px] leading-[32px] text-center sm:py-[50px] lg:left-[300px] left-[50px] top-[50px] sm:top-0 bottom ">BROWSE BY dress STYLE</h3>

            <div className="lg:flex  lg:ml-[70px] mt-[50px] lg:gap-4  ">
            <Image className="pt-[20px] px-4  lg:p-0 lg:block sm:hidden" src={"/style1.png"} alt={"style"} height={289} width={407}/>
            <Image className="pt-[20px] px-4  lg:p-0" src={"/style2.png"} alt={"style"} height={289} width={684}/>
            </div>

            <div className="lg:flex lg:ml-[70px] mt-4 gap-4">
            <Image className="pt-[10px] px-4 lg:p-0" src={"/style3.png"} alt={"style"} height={289} width={684}/>
            <Image className="pt-[20px] px-4  lg:p-0 lg:block sm:hidden" src={"/style4.png"} alt={"style"} height={289} width={407}/>
            </div>
        </div>
    )
}