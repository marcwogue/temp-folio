import { Boxes } from "lucide-react"
import Certificat from "../ui/certificats"
import Reward from "../ui/reward"
import SNav from "../mobile/skillNav"

const Certifications = () => {
  return (
    <div>
        <SNav/>
        <div className="text-center hidden sm:block m-8">
        <h4 className="text-[1.5rem]">
          <Boxes className="inline-block mx-auto" /> voici
        </h4>
        <h2 className="capitalize text-success-content text-[3rem]">
          mes realisations
        </h2>
      </div>
      <div className="flex capitalize  mb-8 textcenter text-3xl underline sm:hidden">
          <h1 className="mx-auto">realisations</h1>
      </div>
        <div className='border-l-6 m-4 border-secondary text-center border-solid text-xl'>
         <h1 className=''>Mes<span className='text-accent-content'> certifications</span></h1>
         </div>
      <Certificat/>
      <Reward/>
    </div>
  )
}

export default Certifications
