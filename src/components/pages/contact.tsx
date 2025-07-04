import { Boxes } from "lucide-react"
import Form from "../ui/contactf"
import MNav from "../mobile/moreNav"
import FastContact from "../ui/fastContact"

const Contact = () => {
  return (
    <div>
      <MNav/>
    <div className="container mt-14 sm:mt-0 top-10 sticky mx-auto">
      


        <div className="text-center hidden sm:block m-8">
        <h4 className="text-[1.5rem]">
          <Boxes className="inline-block mx-auto" /> n'hesitez pas à
        </h4>
        <h2 className="capitalize text-success-content text-[3rem]">
          me contacter
        </h2>
      </div>
      <div className="flex  mb-8 textcenter text-3xl underline sm:hidden">
          <h1 className="mx-auto">Me contacter</h1>
      </div>
        <div className='border-l-6 m-4 border-secondary text-center border-solid text-xl'>
         <h1 className=''>envoyez moi<span className='text-accent-content'> un message</span></h1>
         </div>
      <Form/>
      
        <div className='border-l-6 m-4 border-secondary text-center border-solid text-xl'>
         <h1 className=''>ou si <span className='text-accent-content'>vous voulez</span></h1>
         </div>
      

      <FastContact/>

    </div>
    </div>
  )
}

export default Contact
