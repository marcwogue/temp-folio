import { ArrowRight, Boxes, Building, Target } from "lucide-react"
import {Experience} from "../Json/content.json"
import ParcNav from "../mobile/parcourNav"

const experience = () => {
  return (
    <div className="mt-14 sm:mt-0 overflow-x-hidden">
      <ParcNav/>

        <div className="text-center hidden sm:block m-8">
        <h4 className="text-[1.5rem]">
          <Boxes className="inline-block mx-auto" /> resume de mon
        </h4>
        <h2 className="capitalize text-success-content text-[3rem]">
          experience professionnel
        </h2>
      </div>
      <div className="flex  mb-8 textcenter text-3xl underline sm:hidden">
          <h1 className="mx-auto">experience professionnel</h1>
      </div>
        <div className="ml-[-80%]">
      <div>
      <ul className="timeline timeline-vertical ">
        {
            Experience.map((index)=>{
                return(
                    <li>
                        {index.id==0? " ": <hr/>}
                        <div className="timeline-middle ">
                            <img src={index.holder} className="h-[2rem] w-[3rem] md:h-[5rem] md:w-[6rem] object-cover  rounded-[50%]" alt="" />
                        </div>
                        <div className="timeline-end timeline-box text-[1rem]">
                            <div className="flex flex-col md:flex-row justify-between">
                                <h1 className="text-2xl text-secondary"> {index.title} <br />
                                <div className="text-accent-content text-[0.9rem] m-2">
                                <Building className="inline-block mx-auto"/>{index.location}
                            </div>
                            </h1>
                                <span className="rounded-2xl badge p-3 bg-base-200">{index.start} <ArrowRight className="inline-block mx-auto"/> {index.end}</span>
                            </div>
                            <div>
                                <p>{index.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                              {index.techno.map((indexer)=>{
                                return(
                                  <div className="text-center bg-accent-content badge text-accent ">
                                      <Target className="mx-auto inline-block"/>{indexer}
                                  </div>
                                )
                              })}
                            </div>
                        </div>
                        <hr />
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

export default experience
