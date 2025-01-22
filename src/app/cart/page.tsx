import Link from "next/link"
import Button from "../components/Button"
import CartCard from "../components/CartCard"

const Cart = () => {
  return (
    <>
    <div className="lg:ml-24 md:mt-10 overflow-x-hidden">
    <h2 className="w-[259px] h-[48px] text-[40px] leading-[48px] font-bold mt-16 ">Your cart</h2>

    <div className="lg:flex gap-2">
    <div className="lg:w-[715px] lg:h-[508px] h-[470] rounded-[20px] border-[1px] mt-5 space-y-3 text-black">
    <CartCard name={"Gradient Graphic T-shirt"} size={"Size: Large"} color={"Color: White"} price={"$145"} src={"/page2w.png"}/>
    <CartCard name={"CHECKERED SHIRT"} size={"Size: Medium"} color={"Color: Red"} price={"$180"} src={"/shirt3.png"}/>
    <CartCard name={"SKINNY FIT JEANS"} size={"Size: Large"} color={"Color: Blue"} price={"$240"} src={"/jeans.png"}/>
    </div>

    <div className="md:w-[505px] h-[458px] rounded-3xl border-[1px] py-5 px-6 mt-5">
    <h3 className="w-[189px] h-8 text-2xl leading-[32px] font-bold mb-6">Order Summary</h3>
    <div className="space-y-6">
    <div className="lg:w-[457px] h-[27px] w-[230px] lg:text-xl text-[14px] leading-[27px] flex justify-between">
    <span>Subtotal</span>
    <span>$565</span>
    </div>

    <div className="md:w-[457px] h-[27px] w-[230px] lg:text-xl text-[14px]leading-[27px] flex justify-between">
    <span>Discount (-20%)</span>
    <span className="text-[#FF3333]">-$1135</span>
    </div>

    <div className="md:w-[457px] h-[27px] w-[230px] lg:text-xl text-[14px] leading-[27px] flex justify-between">
    <span>Delivery Fee</span>
    <span>$15</span>
    </div>
    </div>
    <hr className="my-5" />

    <div className="md:w-[457px] h-[27px] w-[230px] lg:text-xl text-[14px] leading-[27px] flex justify-between my-5">
    <span>Total</span>
    <span>$467</span>
    </div>

    <div className="w-[457px] h-[48px] flex gap-3">
    <div className="flex">
           
    <input type="text" placeholder="Add promo code" className="lg:w-[326px] w-[180px] h-12 py-3 px-4 bg-[#F0F0F0] rounded-[62px]" />
    </div>
    <div className="md:w-[119px] w-20 h-12 bg-black rounded-[64px] text-center py-3 px-4 text-white">Apply</div>
    </div>
   <Link href="/checkout"> <Button text={"Go to Checkout"} bgColor={"bg-black"} textcolor="text-white"/></Link>
    </div>
    </div>
   
    </div>
    </>
  )
}

export default Cart