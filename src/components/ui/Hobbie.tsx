
import hobbies from "../Json/hobbie.json"
import { Guitar,PianoIcon,Book,Mic2 } from "lucide-react"

const Hobbie = () => {

  return (
    
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {
            hobbies.map((element)=>{
                return(
                    <>
             <div className='card bg-neutral p-4 grid grid-cols-5 '>
                <div id={`${element.id}`} className='col-span-1 hok   place-content-center  ' >
                { element.id ==1 ? <Guitar className='  content-center size-14 p-2 rounded-[50%] bg-base-100  justify-center '/>:
                      element.id==2?  <PianoIcon className='  content-center size-14 p-2 rounded-[50%] bg-base-100  justify-center ' />:  
                        element.id==3  ? <Book className='  content-center size-14 p-2 rounded-[50%] bg-base-100  justify-center ' /> :
                          element.id==4? <Mic2 className='  content-center size-14 p-2 rounded-[50%] bg-base-100  justify-center '/> : " "
                                  }
                  
              </div>
               <div className='col-span-4 ml-4'>
               <h1 className='text-center text-secondary-content'> {element.title} </h1> 
               <p>
                 {element.description}
               </p>
               </div>
            </div>
                    </>
                )
            })
        }

    </div>
  )
}

export default Hobbie