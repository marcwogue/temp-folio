
import { Boxes } from 'lucide-react'
import CarouselComponent from '../ui/awair'
import MNav from '../mobile/moreNav'

const Update = () => {
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
    </div>
  )
}

export default Update
