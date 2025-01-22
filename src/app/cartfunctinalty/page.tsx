"use client";

import { useEffect, useState } from "react";
import Image from "next/image"
import { Item } from "@radix-ui/react-select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { urlFor } from "@/sanity/lib/image";


const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // State to hold cart items

  useEffect(() => {
    // Retrieve the cart from localStorage when the component mounts
    const cartData = JSON.parse(localStorage.getItem("cart") || "{}");
    const cartArray = Object.entries(cartData).map(([key, value]: [string, any]) => ({
      ...value,
      productName: key,
    }));
    setCartItems(cartArray); // Set the cart items into state
  }, []);

  // Function to handle item removal
  const handleRemove = (productName: string) => {
    const updatedCartItems = cartItems.filter((item) => item.productName !== productName); // Remove the item from state
    setCartItems(updatedCartItems);

    // Update localStorage
    const updatedCart = updatedCartItems.reduce((obj, item) => {
      obj[item.productName] = { ...item, quantity: item.quantity }; // Rebuild the cart object
      return obj;
    }, {});
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
   
  };

  return (
    <>
  <div className="p-5 md:p-8 lg:p-10">
        <h1 className="md:text-2xl text-1xl font-bold mb-5 mt-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.productName}
                className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg gap-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={urlFor(item.image).url()}
                    width={80}
                    height={80}
                    alt={item.productName}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.productName}</h2>
                    <p className="text-gray-600">${item.price}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right md:text-left">
                  <p className="font-bold text-lg">${item.price * item.quantity}</p>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleRemove(item.productName)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-400 mt-2 md:mt-0"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-8 flex justify-center my-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="/" />
            </PaginationItem>
            <PaginationLink href="/">1</PaginationLink>
            <PaginationItem>
              <PaginationLink href="/product">2</PaginationLink>
            </PaginationItem>
            <PaginationLink href="/category">3</PaginationLink>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="/checkout" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default CartPage;
