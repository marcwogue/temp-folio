import { ArrowBigLeft,ArrowBigRight } from "lucide-react"
const Setpup = (props : {classname : string, value: boolean,  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;}) => {
   
  return (
    <div>
        <button  className={` ${props.classname}`} onClick={props.onclick}>
            {props.value==false? <ArrowBigLeft /> :  <ArrowBigRight />}
        </button>
    </div>
  )
}

export default Setpup