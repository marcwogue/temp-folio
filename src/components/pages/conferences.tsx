
import { Boxes, Calendar, Globe, LocationEdit, Map, Package } from "lucide-react"
import conf from "../Json/conference.json"
import Popup from "../ui/popup"
import { useState } from "react"



const Conferences = () => {
  const [visible,setVisible] =useState(6)

  const VoirPlus = ()=>{
    setVisible(visible+3)
  }  
  const confV = conf.slice(0,visible);
  const more = visible < conf.length 
  return (
    <div>


        <div className="text-center hidden sm:block m-8">
        <h4 className="text-[1.5rem]">
          <Boxes className="inline-block mx-auto" /> découvrez
        </h4>
        <h2 className="capitalize text-success-content text-[3rem]">
          les conferences ou j'ai ete
        </h2>
      </div>
      <div className="flex  mb-8 textcenter text-3xl underline sm:hidden">
          <h1 className="mx-auto">conferences</h1>
      </div>

        <div className="ml-[-80%]">
      <div>
      <ul className="timeline    timeline-vertical ">
        {
            confV.map((index)=>{
                return(
                    <li>
                       {index.index!= 0 && <hr /> }

                        <div className="timeline-middle p-2 border-6 border-base-100 bg-white h-4 w-4  rounded-full">
                            
                        </div>
                        <div className="timeline-end w-full timeline-box text-[1rem]">
                            <div className="">
                                <h1 className="text-2xl">{index.conf_title}</h1>
                                <h1 className="card-title text-secondary">{index.conf} </h1>
                            </div>
                            <div className="text-accent-content   m-2">
                                <span className="badge bg-base-300"><Calendar/> {index.date} </span>
                                <span className="badge bg-base-300"><LocationEdit/> {index.mode} </span>
                                <span className="badge bg-base-300"> <Map/> {index.place} </span>
                                <span className="badge bg-base-300"> <Globe/> {index.lang} </span>
                            </div>
                            <div>
                                <p>{index.description}</p>
                            </div>
                            <Popup link={index.link} classname="hover:text-secondary-content text-secondary">see more<Package /></Popup>
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
    {more && 
      <div className="text-center mt-8">
      <button
        onClick={VoirPlus}
        className="btn btn-outline btn-secondary"
      >
        Voir plus
      </button>
    </div>
    }
    </div>
  )
}

export default Conferences
