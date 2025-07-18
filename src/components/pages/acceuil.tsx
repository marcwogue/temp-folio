import Hobbie from '../ui/Hobbie'
import acc from "../Json/acceuil.json"
import { Mail,Laptop,Boxes, Building, Locate, Github, Linkedin } from 'lucide-react'

const acceuil = () => {
  return (
    <div className='gap-4 overflow-auto h-full'>
         <div className='text-center'>
            <h2 className='text-secondary  text-2xl uppercase sm:text-xl sm:text-primary-content   '>
               <Boxes  className='hidden  sm:inline-block' /> Salut
            </h2>
            <div className='hidden sm:block'>
                <h1 className= 'hidden sm:block capitalize text-5xl'>Je suis <span className='text-secondary'>{acc.name}</span></h1>
                <span><Locate className='inline-block mx-auto'/>{acc.locate}.
                     <span className='text-secondary'> <Mail className='inline-block mx-auto'/>{acc.mail}
                      <Github className='inline-block mx-auto'/>   {acc.github}  
                      <Linkedin className='inline-block mx-auto'/>{acc.linkedin}</span>
                </span>
            </div>
            <div className='block sm:hidden'>
            <span className='text-accent-content'>
                  <Building className="inline-block mx-auto"/> {acc.from}
              </span>
              <h1>
                  <Mail className='mx-auto inline-block' /> <a href=""> {acc.mail}</a>
              </h1>
           </div>
         </div>
         <div className='border-l-6 m-4 border-secondary text-center border-solid text-xl'>
         <h1 className=''>Un peu<span className='text-accent-content'> à propos de moi</span></h1>
         </div>
         <div className='flex flex-col text-[1rem] gap-12 sm:mb-[3rem]  md:flex-row'>
                <span className='text-center '>
                <Laptop className='bold size-32 ml-4 inline-block mx-auto text-accent-content  text-center'/>
                </span>
                <p>{acc.about} </p>
         </div>
         <div className='border-l-6 m-4 border-secondary text-center border-solid text-xl'>
                <h1 className=''>Un peu<span className='text-accent-content'> à propos de moi</span></h1>
         </div>
         <Hobbie />
    </div>
  )
}

export default acceuil