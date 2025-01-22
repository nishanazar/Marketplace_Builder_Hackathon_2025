"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }).max(50),
  email: z.string().email({ message: "Invalid email address." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, { message: "Postal code must be exactly 5 digits." }),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, { message: "Card number must be exactly 16 digits." }),
});

const CheckoutForm = () => {
  type formType = z.infer<typeof formSchema>;

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: formType) {
    await client.create({
      _type: "checkout",
      name: values.firstName,
      email: values.email,
      address: values.address,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode,
      cardNumber: values.cardNumber, // This is sensitive; handle securely in real apps
    });

    console.log("Checkout Data:", values);
  }

  return (
    <div className="max-w-full lg:max-w-2xl mx-auto md:mt-20 mt-10 p-6 bg-gray-50 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* State */}
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your state" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Postal Code */}
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your postal code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Card Number */}
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your 16-digit card number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-md"
          >
            Submit Order
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutForm;
