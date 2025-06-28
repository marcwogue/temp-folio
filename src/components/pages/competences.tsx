import { Boxes, ClockFading } from "lucide-react"
import Capacites from "../ui/capacites"
import {capacite} from "../Json/content.json"
import SNav from "../mobile/skillNav"

const back = capacite[0].backend
const front = capacite[0].front
const cloud = capacite[0].cloud

const Competences = () => {
  return (
    <div>
        <SNav/>

        <div className="text-center hidden sm:block m-8">
        <h4 className="text-[1.5rem]">
          <Boxes className="inline-block mx-auto" /> Explorez
        </h4>
        <h2 className="capitalize text-success-content text-[3rem]">
          mes competences
        </h2>
      </div>
      <div className="flex  mb-8 textcenter text-3xl underline sm:hidden">
          <h1 className="mx-auto">Mes competences</h1>
      </div>
      <Capacites />
      <div>
        <h1 className="text-3xl border-l-8 border-secondary mt-16 mb-8 pl-8 capitalize">backend</h1>
        <div className="flex flex-col md:flex-row  flex-wrap">
            {back.map((key)=>{
                return(
                    <div className="flex w-[50%] gap-3 mt-4 mb-4 ">
                        <img src={key.hold} className="w-[3rem]  h-[3rem] rounded-[50%] " alt="" />
                        <div>
                            <h2 className="text-[1rem]">{key.skill}</h2>
                            <span className="text-accent-content text-[0.8rem]"><ClockFading className="mx-auto inline-block" /> {key.Xp}</span>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
      <div>
      <h1 className="text-3xl border-l-8 border-secondary mt-16 mb-8 pl-8 capitalize">front-end</h1>
      <div className="flex  flex-col md:flex-row  flex-wrap">
            {front.map((key)=>{
                return(
                    <div className="flex w-[50%] gap-3 mt-4 mb-4 ">
                        <img src={key.hold} className="w-[3rem]  h-[3rem] rounded-[50%] " alt="" />
                        <div>
                            <h2 className="text-[1rem]">{key.skill}</h2>
                            <span className="text-accent-content text-[0.8rem]"><ClockFading className="mx-auto inline-block" /> {key.Xp}</span>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
      <div>
      <h1 className="text-3xl border-l-8 border-secondary pl-8 mt-16 mb-8 capitalize">cloud service</h1>
      <div className="flex flex-col md:flex-row   flex-wrap">
            {cloud.map((key)=>{
                return(
                    <div className="flex w-[50%] gap-3 mt-4 mb-4 ">
                        <img src={key.hold} className="w-[3rem]  h-[3rem] rounded-[50%] " alt="" />
                        <div>
                            <h2 className="text-[1rem]">{key.skill}</h2>
                            <span className="text-accent-content text-[0.8rem]"><ClockFading className="mx-auto inline-block" /> {key.Xp}</span>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>

    </div>
  )
}

export default Competences
