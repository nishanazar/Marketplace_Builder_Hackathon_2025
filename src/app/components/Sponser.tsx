import Image from "next/image"


export default function Sponser(){
    return (
        <div className="w-full h-[146px]  lg:h-[149px]  sm:h-[149px] bg-[#000000] sm:flex sm:gap-[5px] lg:gap-[90px] sm:m-0 mt-[85px]  overflow-x-hidden">
        <div className="flex lg:flex-none  md:p-0 lg:gap-[100px]   py-8 gap-10">
        <Image className="sm:m-[20px] sm:pt-[70px] lg:ml-[90px] sm:ml-[10px]" src={"/spon1.png"} alt={"shirt"} height={5} width={100}/>
        <Image className="sm:m-[20px] sm:pt-[70px]" src={'/sponser2.png'} alt={"logo"} width={80} height={26} />
        <Image className="sm:m-[20px]  sm:pt-[70px]" src={'/sponser3.png'} alt={"logo"} width={90} height={26} />
        </div>
        <div className="flex lg:flex-none lg:p-0 sm:gap-[5px] lg:gap-[50px] sm:m-0 ml-12 gap-10 " >
        <Image className="sm:m-[20px] sm:pt-[70px] " src={'/sponer4.png'} alt={"logo"} width={100} height={26} />
        <Image className="sm:m-[20px] sm:pt-[70px]" src={'/sponser5.png'} alt={"logo"} width={130} height={26} />
        </div>
        </div>
        )
}