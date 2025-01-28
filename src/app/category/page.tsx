import Image from "next/image"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../../components/ui/pagination"
import { Check, SlidersHorizontal } from "lucide-react"
import { TbMathGreater } from "react-icons/tb"
import Li from "../components/Li"
import Circle from "../components/Circle"
import Button from "../components/Button"
import { client } from "@/sanity/lib/client"
import { IProduct } from "../types/interface"
import { urlFor } from "@/sanity/lib/image"
import { IoIosStar } from "react-icons/io"
import { FaStarHalf } from "react-icons/fa"
import Link from "next/link"

const CategoryPage = async () => {
  const query:IProduct[] = await client.fetch(`*[_type == "products" && category in ["tshirt", "jeans", "hoodie"]] | order(_createdAt desc)[0...9] {
  name,
  price,
  description,
  image,
  _id
}
 `)
  return (
    <>
        <div className="lg:flex overflow-x-hidden w-full justify-center ml-5">
        {/* Side Div */}
        <div className="h-[1220px] w-[295px] m-4 md:hidden block lg:block mt-16 rounded-md p-8">
        <div className="w-[247px] h-[27px] flex justify-between ">
        <h2 className="text-xl font-bold w-[57px] h-[27px]">Filters</h2>
        <SlidersHorizontal className="w-6 h-6" />
        </div>
        <hr className=" w-[247px] my-4"/>
        {/* main div */}
        <div className="w-[247px] min-h-40 space-y-3">

       <Li text={"T-shirts"}/>
       <Li text={"Shorts"}/>
       <Li text={"Shirts"}/>
       <Li text={"Hoodie"}/>
       <Li text={"Jeans"}/>
       </div>

       <hr className=" w-[247px] my-4"/>
       <div className="w-[247px] h-[90px] ">
       <h2 className="text-xl font-bold w-[48px] h-[27px]">Price</h2>
       <div className="w-[247px] h-[43px]  mt-3">
           <Image src="/loader.png" height={43} width={247} alt={"loader"}/>
       </div>
       </div>

       <hr className=" w-[247px] my-4"/>

       <h2 className="text-xl font-bold w-[48px] h-[27px]">Colors</h2>

       <div className="w-[247px] h-[90px] mt-4">
        <div className="flex gap-3">
        <Circle bgColor={"bg-[#00C12B]"}/>
        <Circle bgColor={"bg-[#F50606]"}/>
         <Circle bgColor={"bg-[#F5DD06]"}/>
         <Circle bgColor={"bg-[#F57906]"}/>
         <Circle bgColor={"bg-[#06CAF5]"}/>
        </div>

         <div className="flex gap-3 mt-4">
         <div className="w-[37px] h-[37px] bg-[#063AF5] rounded-full">
         <Check color="#eaf1ea" className="pt-1 ml-2" />
         </div>
         <Circle bgColor={"bg-[#7D06F5]"}/>
         <Circle bgColor={"bg-[#F506A4]"}/>
         <Circle bgColor={"bg-[#F0F0F0]"}/>
         <Circle bgColor={"bg-[#000000]"}/>
         </div>
         </div>
         <hr className="w-[247px] my-4"/>

         <div className="w-[247px] h-[274px] ">
         <h2 className="text-xl font-bold w-[48px] h-[27px]">Size</h2>
         <div className="w-[247px] h-[227px] text-[14px]">
         <div className="flex gap-4 mt-2 ">
         <div className="w-[125px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">XX-Small</div>
         <div className="w-[108px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">X-Small</div>
          </div>
          <div className="flex m-2 dap-3 gap-1">
          <div className="w-[74px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">Small</div>
          <div className="w-[110px] h-[49px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">Medium</div>
          </div>
          <div className="flex m-2 gap-1">
          <div className="w-[76px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">Large</div>
          <div className="w-[109px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">X-Large</div>
          </div>
          <div className="flex m-2 gap-1 ">
          <div className="w-[120px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">XX-Large</div>
          <div className="w-[117px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">3X-Large</div>
          </div> 
          <div className="w-[115px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">4X-Large</div>
          </div>
          </div>
          <hr className=" w-[247px] my-4"/>
         <div className="w-[247px] h-[171px] space-y-5">
         <Li text={"Casual"}/>
         <Li text={"Formal"}/>
         <Li text={"Party"}/>
         <Li text={"Gym"}/>
         </div>
         <button className=" mt-5 w-[247px] h-[48px] bg-black rounded-[62px]  px-[54px] text-white">Apply Filter</button>
         </div>
         <div className="md:mt-16">
         <div>
        {/* Header Section */}
        <div className="md:flex justify-around ">
        <h3 className="text-[32px] font-bold">Casual</h3>
        <p className="text-[16px] hidden md:block">Showing 1-10 of 100 Products <span className="font-bold">Sort by: Most Popular</span></p>
        </div>
        {/* Product Rows */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 overflow-hidden ">
         {query.map((item)=> (
       <div className="" key={item._id}> 
       <Link href={`/category/${item._id}`}>
         <Image src={urlFor(item.image).url()} height={292} width={270} alt={item.name} className="object-cover rounded-md h-[290px] w-full"/>
         <div className="ml-4 mb-2">
         <p className="truncate w-[250px] h-[40px] lg:text-[17px] text-[12px]  font-bold py-2 "> {item.name}</p>
        
         <div className="text-[#FFC633] lg:w-[150px] lg:h-[19px] w-[127px] h-[16px] flex gap-1">
           <IoIosStar />
           <IoIosStar />
           <IoIosStar />
           <FaStarHalf />
           <p className="w-[33px] h-[19px] text-[14px] text-[#000000]">4.5/5</p>
           </div>
          <div className="flex justify-between">
          
           <h5 className="w-[55px] h-[32px] text-[24px] text-[#000000] font-bold">${item.price}</h5>
           <p className="bg-[#FF33331A] text-[#FF3333] font-normal text-[12px] md:text-[14px] lg:text-[15px] rounded-full py-1 px-3">5{item.discountPercent}%</p>
           </div>
           </div>
           </Link>
          </div>
         ))}
        </div>
        </div>
        {/* Pagination */}
          <Pagination className="flex justify-center my-8">
          <PaginationContent>
          <PaginationItem>
          <PaginationPrevious href="/" />
          </PaginationItem>
          <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
          <PaginationLink href="#" isActive>2
          </PaginationLink>
          </PaginationItem>
          <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
          <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
          <PaginationNext href="/category" />
          </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
    </>
  )
}

export default CategoryPage
