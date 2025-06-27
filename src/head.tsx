import Mouse from "./components/ui/mouse"
import SetTheme from "./components/ui/setTheme"
import Picture from "./components/ui/picture"
import avatar from "../src/assets/avatar.jpeg"
import Setpup from "./components/ui/Setpup"
import Navbar from "./components/ui/navbar"
import { Laptop,HardDriveDownload } from "lucide-react"
import type { ReactHTMLElement } from "react"

const head = (props: {className?:string,value : boolean,fonc:(event: React.MouseEvent<HTMLButtonElement>) => void,children? : ReactHTMLElement<HTMLElement>}) => {

 
  return (
    
    <div className={`${props.className} col-span-12 gap-3 overflow-hidden grid grid-rows-11  sm:col-span-1  sm:mt-4 sm:mb-4 sm:rounded-[8px]  sm:row-span-12 row-span-4 border-b-4 border-solid border-base-100  bg-base-200 ${props.value?`lg:col-span-2`:`lg:col-span-1`}`}>
                  <div className={`${props.value?`row-span-4`:`row-span-2`}  `}>
                  <Setpup onclick={props.fonc} value={props.value}   classname={`absolute   rounded-4xl scale-90 hidden lg:block ${props.value? 'ml-[15%]':'ml-[7%]'}`}/> 
                  <div className="flex sm:hidden justify-between">
                      <SetTheme/>
                      <Mouse />
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6">
                    <div >
                    </div>
                   <div className="col-span-1 sm:col-span-4 ">
                   <Picture src={avatar}  className={`mt-[-1rem] sm:h-[4rem]  w-full h-[5%] sm:mt-[1rem] ${props.value? ' lg:h-[6rem] ': 'lg:h-[4rem]'} `}>

                    </Picture>
                   </div>
                      {props.children}
                  </div>
                  <div className="text-center m-2">
                        {props.value?<div>
                          <h1 className="text-2xl" ><Laptop className="text-2xl sm:hidden absolute ml-[25%] md:relative md:ml-[15%] md:mb-[-1.5rem]  text-secondary" />  Jhon <span className="text-secondary">Doe</span></h1>
                      <span>
                        developper
                      </span>
                        </div>:''}
                          <div className="card bg-primary p-2 text-center">
                            <a href="up.pdf" target="_blank">{props.value? 'download resume':''} <HardDriveDownload value="download resume"  className=" text-center inline-block mx-auto"/> </a>
                          </div>
                  </div>
                  </div>
                  <div className={`hidden  sm:block ${props.value?'row-span-6':'row-span-6'}`}>
                    <Navbar left={props.value} />
                  </div>
                  <div className={`hidden justify-between sm:flex overflow-scroll ${!props.value?'flex-col row-span-2':'row-span-1 flex-row'}`}>
                      <SetTheme/>
                      <Mouse />
                  </div>
              </div>
  )
}

export default head