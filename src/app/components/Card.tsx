import { IoIosStar } from "react-icons/io";
import Image from "next/image";

interface data {
    text : string;
    p: string;
}
export default function Card(props:data){
    return(
    <div className="w-full max-w-[400px] h-auto rounded-[20px] border border-[#0000001A] p-6 md:p-8">
    <div>
    {/* Star Ratings */}
    <div className="flex gap-2 text-[#FFC633]">
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    </div>
      
    {/* Title and Image */}
    <div className="flex items-center justify-between my-4">
    <h3 className="text-[16px] md:text-[20px] font-bold leading-tight">
    {props.text}
    </h3>
    <Image src={"/Frame.png"} alt={"icon"} height={24} width={24} />
    </div>
    {/* Description */}
    <p className="text-[14px] md:text-[16px] text-[#00000099] text-justify">
    {props.p}
    </p>
    </div>
    </div>
      
    )
}