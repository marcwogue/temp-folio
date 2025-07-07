import { Bot} from 'lucide-react'
import Gemini from './gemini'
import { useChat } from '../context/chatb'


const Chat = () => {
    const {state} = useChat();
    const {opener} =useChat()
  return (
    <div className='bottom-10 absolute right-10'>
        {
            state?
             <div className='btn btn-primary rounded-full p-4' onClick={()=>{opener()}}>
                <Bot className='rounded-full mx-auto  ' />
            </div>
            :
            <div  className='' >
                <Gemini />
            </div>
        }
      
    </div>
  )
}

export default Chat
