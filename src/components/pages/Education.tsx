import { ArrowRight, Boxes, Building } from "lucide-react"
import {education} from "../Json/content.json"



const Education = () => {
  return (
    <div className="m-4">
      


        <div className="text-center hidden sm:block m-8">
        <h4 className="text-[1.5rem]">
          <Boxes className="inline-block mx-auto" /> c'est
        </h4>
        <h2 className="capitalize text-success-content text-[3rem]">
          mon context educatif
        </h2>
      </div>
      <div className="flex  mb-8 textcenter text-3xl underline sm:hidden">
          <h1 className="mx-auto">education</h1>
      </div>
        <div className="ml-[-80%]">
      <div>
      <ul className="timeline timeline-vertical ">
        {
            education.map((index)=>{
                return(
                    <li>
                        <div className="timeline-middle ">
                            <img src={index.holder} className="h-[5rem] w-[6rem] object-cover  rounded-[50%]" alt="" />
                        </div>
                        <div className="timeline-end timeline-box text-[1rem]">
                            <div className="flex justify-between">
                                <h1 className="text-2xl">{index.title}</h1>
                                <span className="p-2 rounded-2xl bg-base-200">{index.start} <ArrowRight className="inline-block mx-auto"/> {index.end}</span>
                            </div>
                            <div className="text-accent-content m-2">
                                <Building className="inline-block mx-auto"/>{index.location}
                            </div>
                            <div>
                                <p>{index.description}</p>
                            </div>
                        </div>
                        <hr />
                    </li>
                )
            })
        }

  <li>
    <hr />
    <div className="timeline-middle w-8 h-8 border-4 border-neutral-content rounded-3xl">
      
    </div>
  </li>
</ul>
      </div>
    </div>
    </div>
  )
}

export default Education
