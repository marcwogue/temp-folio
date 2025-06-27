import {useRef,useEffect,useState} from 'react'
import { Wand, WandSparkles } from "lucide-react"

const mouse = () => {
    const mouseRef = useRef<HTMLDivElement>(null);
    const [magic,setMagic] = useState(false)
    const [scale,setScale] = useState(false)
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (mouseRef.current) {
                mouseRef.current.style.left = `${e.clientX}px`;
                mouseRef.current.style.top = `${e.clientY}px`;
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    
    
    document.addEventListener('click', ()=>{
        setScale(true)
        setTimeout(() => {
            setScale(false)
        }, 300);
    })
  return (
    <>
    <div className='scale-75'>
        <button onClick={() => setMagic(!magic)} className="btn btn-primary">
                {magic? <WandSparkles /> : <Wand />}
        </button>
    </div>
    {magic?<div className={scale ? 'w-8 h-8 bg-success opacity-100  z-50 fixed scale-125 transition-all duration-300 rounded-[50%] ' : 'w-8 h-8 bg-success scale-100 opacity-60 transition-all duration-300 rounded-[50%] absolute'} ref={mouseRef} style={{transform: `scale(${scale})`}}>


</div>:null}
    
    </>


  )
}

export default mouse