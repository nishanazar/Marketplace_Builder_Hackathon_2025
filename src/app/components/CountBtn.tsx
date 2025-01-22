"use client"

import { useState } from "react"
const CountBtn = () => {
    const [count, setCount ]  = useState(0)
    function handler (){
      setCount(count -1)
    }
    
    function handler2 (){
     setCount(count +1)
    }

  return (
    <div className="w-[170px] h-[52px] rounded-[62px] py-4 px-5 bg-[#F0F0F0] text-center space-x-2">
    <button className="w-6 h-6 "onClick={handler}>-</button>
    <span className="w-6 h-6">{count}</span>
    <button className=" w-[18px] h-[18px]"  onClick={handler2}>+</button>
    </div>
  
  )
}

export default CountBtn