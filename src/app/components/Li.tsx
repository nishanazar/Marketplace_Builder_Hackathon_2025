import { TbMathGreater } from "react-icons/tb"
interface listItem {
    text: string;
}
const Li = (props:listItem) => {
  const {text} = props
  return (
  <div>
  <li className="w-[247px] h-[24px] flex justify-between ">
  <p className="w-[92px]">{text}</p> 
  <TbMathGreater className="h-[17.73px] w-[15.78px] ml-2 text-black" />
  </li>
  </div>
  )
}

export default Li