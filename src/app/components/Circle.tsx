
interface ICircle {
    bgColor: string
}
const Circle = (props: ICircle) => {
  const {bgColor} = props
  return (
  <div className={`w-[37px] h-[37px] ${bgColor} rounded-full`}></div>
  )
}

export default Circle