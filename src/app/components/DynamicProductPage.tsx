"use client";
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { urlFor } from '@/sanity/lib/image';
import { Star, StarIcon, Truck } from 'lucide-react';
import Image from 'next/image';
import { IDynamic } from "../types/interface";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from 'next/link';

const ProductPage = ({ product }: { product: IDynamic}) => {
  const handleClick = (item: IDynamic)=> {
  const cart = JSON.parse(localStorage.getItem('cart') || "{}");
  alert(`Product added to cart!`);

  if(cart[item.name]){
  cart[item.name] = {
  ...cart[item.name], quantity: cart[item.name].quantity + 1,
  };
  }else {
  cart[item.name] = {...item, quantity: 1};}

  localStorage.setItem("cart", JSON.stringify(cart)
  )
  }

  return (
    <div className="mt-10 md:mt-20 lg:flex lg:mb-20 mb-10 justify-center ">
    {/* Image  */}
    <div className=" mb-6 lg:mb-0">
    <Image
    src={urlFor(product.image).url()}
    alt={product.name}
    className="rounded-lg shadow-md object-contain max-h-[450px] max-w-[450px] aspect-square"
    width={450}
    height={450}/>
    </div>
  
    {/* Product Details */}
    <div className="md:ml-10 ml-4 space-y-4 lg:w-1/2 mt-2">
    {/* Product Name */}
    <h2 className="font-bold text-gray-900 text-[20px] md:text-[25px] lg:text-[30px] leading-snug">
    {product.name}
    </h2>

    {/* Rating */}
    <div className="flex items-center gap-1 text-[#FFC633] text-[16px] md:text-[20px] lg:text-[24px]">
    <Star />
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <span className="text-[#000000] text-[14px] md:text-[16px]">4.5/5</span>
    </div>

    {/* Pricing */}
    <div className="text-[20px] md:text-[28px] lg:text-[32px] font-bold flex items-center space-x-4">
    <span className="text-black">${product.price}</span>
    {product.discountPercent > 0 && (
    <p className="bg-[#FF33331A] text-[#FF3333] font-normal text-[12px] md:text-[14px] lg:text-[16px] rounded-full py-1 px-3">
    {product.discountPercent}%
    </p>
    )}
    </div>
  
    {/* Shipping Info */}
    <div className="flex items-center gap-2 text-gray-500 text-[12px] md:text-[14px] lg:text-[16px]">
    <Truck className="h-5 w-5 md:h-6 md:w-6" />
    <span>2-4 Day Shipping</span>
    </div>
    <div className='flex gap-4'>
    <Select>
    <SelectTrigger className="w-[130px]">
    <SelectValue placeholder="Select Color" />
    </SelectTrigger>
    <SelectContent>
    {product.colors.map((color: string, index:number) => (
    <SelectItem key={index} value={color}>
    {color}
    </SelectItem>
    ))}
    </SelectContent>
    </Select>

    <Select>
    <SelectTrigger className="w-[130px]">
    <SelectValue placeholder="Select Sizes" />
    </SelectTrigger>
    <SelectContent>
    {product.sizes.map((size: string, index:number) => (
    <SelectItem key={index} value={size}>
    {size}
    </SelectItem>
    ))}
    </SelectContent>
    </Select>
    </div>

    {/* Buttons */}
    <div className="flex gap-4 flex-wrap">
    <Button onClick={()=> handleClick(product)} variant="default">
     Add to Bag
    </Button>
    <Link href="/checkout">
    <Button variant="secondary">Checkout Now</Button></Link>
    </div>
  
    {/* Description */}
    <p className="text-[#00000099] font-normal text-[10px] md:text-[12px] lg:text-[15px] leading-[18px] md:leading-[22px] lg:leading-[24px] text-justify md:w-[450px] lg:w-[610px] pr-8 md:pr-0">
    {product.description}
    </p>
    </div>
    </div>
  );
};

export default ProductPage;
