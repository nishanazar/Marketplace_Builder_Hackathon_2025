"use client"
import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../components/ui/sheet"

// Define the type for the cart items
interface CartItem {
  quantity: number;
  productName: string;
  productPrice: number;
  imageUrl: string;
}
const Navbar = () => {
const [cartCount, setCartCount] = useState<number>(0);

useEffect(() => {
// Retrieve the cart from localStorage when the component mounts
const cartData = JSON.parse(localStorage.getItem("cart") || "{}");

// Type the cartData as an object with string keys and CartItem values
const totalCount = Object.values(cartData).reduce(
(acc: number, curr: unknown) => {
// Type assertion to specify the type of `curr`
const item = curr as CartItem;
return acc + item.quantity; // Now we know item has a `quantity` field
},
      0
);
setCartCount(totalCount); // Update the cart count
}, []);
  
return(
    <>
    <div className="w-full mx-auto  bg-[#000000] text-[#FFFFFF] pl-[15px] md:pl-[500px] py-[9px] md:py-3 flex justify-between items-center overflow-x-hidden lg:mx-auto">
    <p className="text-[10px] sm:text-[13px] leading-[18.9px] text-center lg:text-left">
    Sign up and get 20% off to your first order 
    <span className="underline"> Sign Up Now</span>
    </p>
    <ImCross className="h-[20px] w-[20px] hidden sm:block cursor-pointer" />
    </div>

    {/* icon */}
    {/* mAIN DIv */}
    <div className="relative h-[48px] w-full lg:top-[32px] top-[32px] left-[15px] lg:ml-[100px] gap-4 flex overflow-x-hidden" >

    {/* Header Section */}
    <h3 className="md:h-[22px] md:w-[160px] h-[18px] w-[126px] md:text-[32px] text-[25px] leading-[38.4px]   text-[#000000] font-bold mt-1" >SHOP.CO</h3>
    <div>
    <ul className="h-[22px] w-[321px] gap-4 md:text-[16px] mt-3 lg:flex sm:flex hidden">
    <li className="h-[22px] w-[57px]  gap-1 flex">
    </li> 
    <Link href="/"><li  className="h-[22px] w-[56px] ">Shop</li></Link>
    <Link href="/product"><li  className="h-[22px] w-[56px] ">OnSale</li></Link>
    <Link href="/category"><li className="h-[22px] w-[87px] ">NewArrivals</li></Link>
    <Link href="/cart">  <li className="h-[22px] w-[49px] ">Cart</li></Link>
    </ul>
    </div>
    <div className="h-[48px] w-[500px] rounded-[62px] bg-[#F0F0F0] py-3 px-4 lg:flex sm:hidden  hidden lg:ml-7" >
    <CiSearch className="h-[24px] w-[24px] " />
    <div className="h-[22px] w-[171px]  text-[16px] text-[#00000066] ml-2 ">Search for products...
    </div>
    </div>
   
    <div className="lg:h-[50px] lg:w-[90px] h-[26px] w-[92px] lg:gap-[14px] flex gap-3 ml-4  ">
    <CiSearch className="h-[50px] w-[50px]" />

    <div className="relative">
    {/* Cart icon */}
    <Link href="/cartfunctinalty">
    <FiShoppingCart className="h-[25px] w-[25px] mt-3" />
    {/* Show cart count badge */}
    {cartCount > 0 && (
    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
    {cartCount}
    </span>
    )}
    </Link>
    </div>
    <FaCreativeCommonsBy className="h-[50px] w-[50px]" />
    </div>
    
    <Sheet>
    <SheetTrigger className="mr-2 md:hidden">
    <Menu />
    </SheetTrigger>
    <SheetContent className="px-4 py-6">
    <h3 className="text-[20px] md:text-[32px] font-bold text-[#000000] leading-[1.2]">
    SHOP.CO
    </h3>
    <div className="space-y-4 flex flex-col mt-4">
    <Link href="/" className="text-sm font-medium">Shop</Link>
    <Link href="/product" className="text-sm font-medium">OnSale</Link>
    <Link href="/category" className="text-sm font-medium">NewArrivals</Link>
    <Link href="/cart" className="text-sm font-medium">Cart</Link>
    </div>
    </SheetContent>
    </Sheet>
    </div>
</>

    )
  }


  export default Navbar