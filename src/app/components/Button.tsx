interface type {
    text: string;
    bgColor: string;
    border?: string;
    textcolor?: string;
}
export default function Button(props: type){
const {  text, bgColor, border, textcolor} = props
 return(
<div className={`h-[52px] md:w-[320px] overflow-hidden relative top-[30px] rounded-[62px]  ${props.bgColor} py-[16px] text-center text-[16px] ${border} font-medium leading-[21.6px]  ${textcolor}`}>{props.text}</div>
)
}