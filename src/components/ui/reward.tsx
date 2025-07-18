
import {reward} from "../Json/content.json"
import Certif from "./certf"


const Reward = () => {
  return (
    <div>
       <div className='border-l-6 m-4 border-secondary text-center border-solid text-xl'>
         <h1 className='capitalize'>reconnaiissance de<span className='text-accent-content capitalize '> participation </span></h1>
         </div>

         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {reward.map((index)=>{
                return(
                    <div className="card p-3 place-item-center gap-3 text-center bg-base-100">
                        <img src={index.image} alt="" className="mx-auto rounded-full border-2 border-base-200 w-[5rem] h-[5rem]" />
                        <h1 className="mx-auto text-secondary card-title">
                            {index.title}
                        </h1> 
                        <p>
                            {index.description}
                        </p>
                        <div className=" flex justify-between px-2 bg-base-300">
                            <span className="badge badge-ghost mt-2">
                                {index.where}
                            </span>
                            <Certif link={index.link}/>
                        </div>


                    </div>
                )
            })}
         </div>


    </div>
  )
}

export default Reward
