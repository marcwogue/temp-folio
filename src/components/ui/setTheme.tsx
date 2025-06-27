import { useEffect, useState } from "react"
import  {Sun, MoonStar } from "lucide-react"
 

const setTheme = () => {
    const [theme, setTheme] = useState(()=>{
      const stored = localStorage.getItem("check");
      console.log(stored);
      return stored? stored : "shadow";
    })
    const [sun,setsun] = useState(false)

    const toggleTheme = ()=>{
        const shadow = "shadow"; const creppy = "creppy"
        theme == shadow ? setTheme(creppy) : setTheme(shadow);
        setsun(!sun)
    }
    useEffect(()=>{
      const chose = theme;
      localStorage.setItem("check",chose)
      console.log(localStorage.getItem("check"));
      document.documentElement.dataset.theme = chose
      
    },[theme])
    

  return (
    <div className=" scale-75">

      <button className=" btn btn-primary" onClick={toggleTheme}>
          
          {sun? <Sun /> :  <MoonStar /> }
      </button>

         

    </div>
  )
}

export default setTheme