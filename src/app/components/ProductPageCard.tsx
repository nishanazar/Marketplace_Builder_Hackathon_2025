import { IoIosStar } from "react-icons/io"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"

  interface IProductPage {
    name: string;
    des: string;
    para: string
  }

const ProductPageCard = (props: IProductPage) => {
  const {name, des, para} = props
  return (
  <Card className="w-full md:max-w-[610px] h-auto sm:h-[241px] rounded-[20px] overflow-hidden ">
  <CardHeader>
  <CardTitle>
  <div className="text-[#FFC633] flex gap-2 ml-7 mt-3">
  <IoIosStar />
  <IoIosStar />
  <IoIosStar />
  <IoIosStar />
  </div>
  </CardTitle>
  <CardDescription>
  <div className="flex gap-4 mt-2 items-center">
  <h3 className="text-[18px] sm:text-[20px] leading-6 font-bold text-black ml-7">{name}</h3>
  <Image src={"/Frame.png"} alt={"icon"}height={24} width={24}className="h-[24px] w-[24px]"/>
  </div>
  </CardDescription>
  </CardHeader>
  <CardContent>
  <p className="text-sm sm:text-base">{des}</p>
  </CardContent>
  <CardContent>
  <p className="text-sm sm:text-base">{para}</p>
  </CardContent>
  </Card>
)
}

export default ProductPageCard