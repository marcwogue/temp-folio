import actu from '../Json/actu.json'
import { Boxes, Calendar } from 'lucide-react'
import CarouselComponent from '../ui/awair'
import MNav from '../mobile/moreNav'
import {  useState } from 'react'

const Update = () => {

  const [visible,setVisible] =useState(6)

  const VoirPlus = ()=>{
    setVisible(visible+3)
  }  
  const actuV = actu.slice(0,visible);
  const more = visible < actu.length 
  return (
    <div>
      <MNav/>
        <div className="text-center hidden sm:block m-8">
        <h4 className="text-[1.5rem]">
          <Boxes className="inline-block mx-auto" /> voici
        </h4>
        <h2 className="capitalize text-success-content text-[3rem]">
          quelques mises à jours
        </h2>
      </div>
      <div className="flex  mb-8 textcenter text-3xl underline sm:hidden">
          <h1 className="mx-auto">Mises à jours</h1>
      </div>
      <CarouselComponent/>
      <h1 className="text-3xl border-l-8 border-secondary mt-16 mb-8 pl-8 capitalize"> fil d'actualite</h1>


      <div className='ml-[-80%] '>
      <ul className="timeline    timeline-vertical ">
        {
            actuV.map((index)=>{
                return(
                    <li>
                       {index.index!= 0 && <hr /> }

                        <div className="timeline-middle p-2 border-6 border-base-100 bg-white h-4 w-4  rounded-full">
                            
                        </div>
                        <div className="timeline-end w-full py-8 timeline-box text-[1rem]">
                            <div className="">
                                <h1 className="text-2xl">{index.what} <span className='text-secondary'>{index.where} </span></h1>
                            </div>
                            <div className="text-accent-content   m-2">
                                <span className="badge bg-base-300"><Calendar/> {index.date} </span>
                            </div>
                            <div>
                                <p>{index.descripsion}</p>
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

export default Update
