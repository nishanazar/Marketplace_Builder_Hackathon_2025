import Image from "next/image"
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { IProduct } from "../types/interface";
import Link from "next/link";

export default async function NewArrivals(){
const query:IProduct[] = await client.fetch(`*[_type == "products" && new == true][0...4] {
    _id,
    name,
    price,
    description,
  image,
   
  } `)
  
return (
<>
<h5 className="lg:w-[403px] lg:h-[58px] lg:ml-[518px] lg:text-5xl lg:my-[50px] lg:font-bold text-center text-[#000000] w-[369px] h-[38px] font-extrabold   text-2xl lg:m-0 mt-[75px] mb-6">NEW ARRIVALS
</h5>
<div className="md:flex justify-center gap-5 overflow-hidden ">
{query.map((item)=> (
<div key={item._id}> 
<Link href={`/dynamicProduct/${item._id}`}>
<Image src={urlFor(item.image).url()} height={292} width={270} alt={item.name} className="object-cover rounded-md h-[290px] w-full"/>
<div className="ml-4 mb-2">
<p className="truncate w-[250px] h-[40px] lg:text-[17px] text-[14px]  font-bold py-2 "> {item.name}</p>
<div className="text-[#FFC633] lg:w-[150px] lg:h-[19px] w-[127px] h-[16px] flex gap-1">
<IoIosStar />
<IoIosStar />
<IoIosStar />
<FaStarHalf />
<p className="w-[33px] h-[19px] text-[14px] text-[#000000]">4.5/5</p>
</div>
<h5 className="w-[55px] h-[32px] text-[24px] text-[#000000] font-bold">${item.price}</h5>
</div>
</Link>
</div>
))}
</div>

<div className="lg:h-[52px] lg:w-[218px] relative top-[40px] rounded-[62px] py-[16px] text-center text-[16px] font-medium leading-[21.6px] border-[1px] border-[#0000001A] lg:left-[544px] left-5">View all</div>
<hr className="lg:my-[90px] my-[50px] lg:w-[1000px] text-[#0000001A]" />

</>

)
}