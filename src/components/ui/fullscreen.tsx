import { useState } from "react"
import { Maximize2, Minimize2 } from "lucide-react"

const FullscreenToggle = (props:{className?:string}) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    const elem = document.documentElement

    if (!document.fullscreenElement) {
      elem.requestFullscreen().then(() => setIsFullscreen(true))
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false))
    }
  }

  return (
    <button onClick={toggleFullscreen} className={"btn btn-secondary"+props.className }>
      {isFullscreen ? <Minimize2 /> : <Maximize2 />}
    </button>
  )
}

export default FullscreenToggle
