import Hobbie from '../ui/Hobbie'
import { Mail,Laptop,Boxes, Building, Locate, Github, Linkedin } from 'lucide-react'

const acceuil = () => {
  return (
    <div className='gap-4'>
         <div className='text-center'>
            <h2 className='text-secondary  text-2xl uppercase sm:text-xl sm:text-primary-content   '>
               <Boxes  className='hidden  sm:inline-block' /> Salut
            </h2>
            <div className='hidden sm:block'>
                <h1 className= 'hidden sm:block capitalize text-5xl'>Je suis <span className='text-secondary'>jhon doe</span></h1>
                <span><Locate className='inline-block mx-auto'/>Some where.
                     <span className='text-secondary'> <Mail className='inline-block mx-auto'/>example@gmail.com.
                      <Github className='inline-block mx-auto'/> github here.
                      <Linkedin className='inline-block mx-auto'/>linkedin</span>
                </span>
            </div>
            <div className='block sm:hidden'>
            <span className='text-accent-content'>
                  <Building className="inline-block mx-auto"/> city-town-countries
              </span>
              <h1>
                  <Mail className='mx-auto inline-block' /> <a href=""> Mail@somthing.com</a>
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
                <p>

                    ➜  Network: http://10.2.3.173:5173/
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ad accusamus. Iste, non, deleniti numquam quia laborum sed nihil eaque asperiores harum perspiciatis aut labore fugiat nisi autem iusto vero!
                 </p>
         </div>
         <div className='border-l-6 m-4 border-secondary text-center border-solid text-xl'>
                <h1 className=''>Un peu<span className='text-accent-content'> à propos de moi</span></h1>
         </div>
         <Hobbie />
    </div>
  )
}

export default acceuil