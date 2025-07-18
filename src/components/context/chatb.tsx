import { createContext, useContext, useState, type ReactNode } from "react";




export interface chatContextType{
    state : boolean;
    opener: ()=>void;
    closer: ()=>void;
}

const chatContext = createContext<chatContextType|undefined>(undefined)

export const ChatProvider = (props :{children :ReactNode}) => {

    const [state,setState] = useState(true);

    const opener = ()=>{
        setState(false);
        console.log(state);
        
    }
    const closer = ()=>{
        setState(true);
        console.log(state);
        
    }
    
    


  return (
    <chatContext.Provider value={{state,opener,closer}}>
        {props.children}
    </chatContext.Provider>
  )
}


export const useChat = ():chatContextType=>{
    const context = useContext(chatContext);
    if(!context){
        throw new Error('erreur sur chatContext')
    }
    return context
}
