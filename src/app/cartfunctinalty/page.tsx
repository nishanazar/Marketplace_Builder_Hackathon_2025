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
import Link from "next/link";

const CartPage = () => {
const [cartItems, setCartItems] = useState<any[]>([]); // State to hold cart items

  useEffect(() => {
    // Retrieve the cart from localStorage when the component mounts
    const cartData = JSON.parse(localStorage.getItem("cart") || "{}");
    const cartArray = Object.entries(cartData).map(([key, value]: [string, any]) => ({
      ...value,
      productName: key,
  }));
    setCartItems(cartArray); 
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
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // You can add shipping or taxes as per your requirement
  const shipping = 5.0; // Static shipping cost for now
  const taxes = totalPrice * 0.1; // Example: 10% tax on the total price
  const grandTotal = totalPrice + shipping + taxes;

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

       {/* Order Summary */}
       <div className="p-5 md:p-8 lg:p-10 mt-8 border-t-2">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="space-y-4 mt-4">
          <div className="flex justify-between">
            <p className="text-gray-700">Subtotal:</p>
            <p className="font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping:</p>
            <p className="font-bold">${shipping.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Taxes (10%):</p>
            <p className="font-bold">${taxes.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-semibold">${grandTotal.toFixed(2)}</p>
          </div>
        </div>
        <Link href="/checkout">
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
          Proceed to Checkout
        </button>
        </Link>
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
