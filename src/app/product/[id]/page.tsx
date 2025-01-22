import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Star, StarIcon, Truck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import DynamicProductPage from '@/app/components/DynamicProductPage';
  
export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // Sanity query to fetch product data
  const query = await client.fetch(`*[_type == "products" && _id == "${params.id}"]{
    _id,
    name,
    price,
    description,
    category,
    image,
    colors,
    sizes,
    discountPercent
  }`);

// Check if product exists
const product = query[0]

  return (
   <div>
    <DynamicProductPage product={product}/>
   </div>

  );
}
