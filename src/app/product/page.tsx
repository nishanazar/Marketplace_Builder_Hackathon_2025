import { Check, } from "lucide-react"
import Image from "next/image"
import { IoIosStar } from "react-icons/io"
import CountBtn from "../components/CountBtn"
import Button from "../components/Button"
import ProductPageCard from "../components/ProductPageCard"
import Circle from "../components/Circle"
import { client } from "@/sanity/lib/client"
import { IProduct } from "../types/interface"
import { FaStarHalf } from "react-icons/fa"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"


const ProductDetails = async () => {
  const query:IProduct[] = await client.fetch(`*[_type == "products" && category == "tshirt"][0...4]  {
      _id,
      name,
      price,
      description,
      image,
      discountPercent,
     
    }`)
  return (
    <>
     <div className=" md:mt-[170px] mt-[60px] lg:flex overflow-x-hidden ">
      {/* shirt  */}
      <div className="flex lg:ml-[100px] md:ml-14 gap-3 ">
      <div className="space-y-3">
      <Image src={"/T-shirt1.png"} alt={"shirt"} height={167} width={152}/>
      <Image src={"/T-shirt2.png"} alt={"shirt"} height={168} width={152}/>
      <Image src={"/T-shirt3.png"} alt={"shirt"} height={167} width={152}/>
      </div>

      <div className="overflow-x-hidden">
      <Image src={"/big-shirt.png"} alt={"shirt"} height={530} width={444}/>
      </div>
      </div>

      {/* product Details */}
       <div className="md:my-10 ml-4 space-y-4">
        <h2 className="w-[600px] h-[48px]  font-bold md:text-[40px] text-[25px] leading-[48px] text-[#000000]">One Life Graphic T-shirt</h2>
        <div className="flex gap-1 text-[#FFC633] text-[24px]"> 
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <span className="w-[38px] h-[22px] text-[16px] text-[#000000]">4.5/5</span>
        </div>
        <div className="text-[32px] leading-[43px] font-bold   space-x-4">
         <span className="w-[81px] h-[43px]  ">$260</span>
         <span className="w-[83px] h-[43px] line-through text-[#0000004D] ">$260</span>
         <span className="w-[72px] h-[34px] bg-[#FF33331A] text-[#FF3333] font-normal text-[16px] rounded-[62px] py-[6px] px-3">$260</span>
         <p className="md:w-[590px] w-[300px] h-[33px] lg:text-[16px] text-[12px] leading-[22px] font-normal text-[#00000099]">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        </div>
        <hr className="bg-[#0000001A] w-[570px] relative top-5"/>

       {/* color select */}
       
      <p className="w-[123px] h-[11px] text-[16px] py-4 overflow-hidden ">Select Colors</p>
       
        <div className="w-[143px] h-[37px]  flex gap-4">
          <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full">
          <Check color="#eaf1ea" className="pt-1 ml-2" />.
          </div>
          <Circle bgColor={"bg-[#314F4A]"}/>
          <Circle bgColor={"bg-[#31344F]"}/>
          


        </div>
        <hr className="bg-[#0000001A] w-[570px] relative top-5 overflow-hidden"/>
        {/* Choose Size */}
        <p className="w-[130px] h-[11px] text-[16px] py-4 ">Choose Size</p>

        <div className="w-[420px] h-[46px]  gap-3 flex  flex-wrap">
          <div className="w-[86px] h-[46px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">Small</div>
          <div className="w-[86px] h-[46px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">Medium</div>
          <div className="w-[86px] h-[46px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">Large</div>
          <div className="w-[110px] h-[46px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">X-Large</div>
          </div>


           <div className="flex gap-12">
           <CountBtn/>
           <Button text={"Add to Cart"} bgColor={"bg-[#000000]"} textcolor="text-white"/>
           </div>
           </div>
           </div>

        {/* section All Reviews */}
        
          <div className="lg:text-[20px]  text-[#00000099] leading-[22px] space-x-[350px] mt-[60px] lg:ml-[100px]  border-b-[1px] md-block hidden ">
          <span>Product Details</span>
          <span>Rating & Reviews</span>
          <span>FAQs</span>
          </div>
          <Image className="ml-[900px] my-6 md:block hidden" src={"/view.png"} alt={"view"} height={48} width={354} />
         {/* Rewiews cards */}
            <div className="lg:ml-11 mx-3">
           <div className="md:flex gap-10">
           <ProductPageCard name={"Samantha D."} des={"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."} para={"Posted on August 14, 2023"}/>
           <ProductPageCard name={"Alex M."} des={"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."} para={"Posted on August 15, 2023"}/>
           </div>
           <div className="md:flex gap-10 mt-8">
           <ProductPageCard name={"Ethan R."} des={"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."} para={"Posted on August 16, 2023"}/>
           <ProductPageCard name={"Olivia P."} des={"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."} para={"Posted on August 17, 2023"}/>
           </div>

           <div className="md:flex gap-10 mt-8">
           <ProductPageCard name={"Liam K."} des={"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."} para={"Posted on August 18, 2023"}/>
           <ProductPageCard name={"Ava H."} des={"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."} para={"Posted on August 19, 2023"}/>
           </div>
           </div>

           <div className="lg:ml-[490px] ml-8 my-10 ">
           <Button text={"Load More Reviews"} bgColor={"bg-white"} textcolor={"text-black"} border="border-2"/>
           </div>

         <h1 className="lg:w-[579px] h-[58px] lg:text-[48px] text-[30px] font-bold text-center leading-[57px] mt-8 lg:ml-[400px] lg:mb-10 lg:mt-10">You might also like</h1>


        <div className="md:flex  justify-center gap-5 ">
               {query.map((item: any)=> (
           <div className="" key={item._id}> 
           <Link href={`/dynamicProduct/${item._id}`}>
             <Image src={urlFor(item.image).url()} height={292} width={270} alt={item.name} className="object-cover rounded-md h-[290px] w-full overflow-hidden"/>
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
               <p className="bg-[#FF33331A] text-[#FF3333] font-normal text-[12px] md:text-[14px] lg:text-[15px] rounded-full py-1 px-3">{item.discountPercent}%</p>
               </div>
                </div>
               </Link>
              </div>
             ))}</div>


        
     </>
       
   


  )
}

export default ProductDetails