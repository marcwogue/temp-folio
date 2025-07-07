import { Loader, Send, Trash, X } from "lucide-react"
import { useEffect, useRef, useState, type ChangeEvent } from "react"
import { useChat } from "../context/chatb"
import axios from "axios"
import actu from "../Json/actu.json"
import blog from "../Json/blog.json"
import contente from "../Json/content.json"
import contact from "../Json/fastContacts.json"
import hobbie from "../Json/hobbie.json"
import certf from "../Json/certificats.json"
import conf from "../Json/conference.json"
import stats from "../Json/stats.json"

interface answer{
  from : string;
  cont : string
}



const Gemini = () => {

  const data = {actu,blog,contente,contact,hobbie,certf,conf,stats}
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
  const key = "AIzaSyDxUPtVU9naSs865gQo6ydH-tHPVD_zzVw"

        const [loading,setloading] = useState(false)
        const [req,setreq] = useState("")
        const [ans,setAns] = useState<answer[]>([])
        const {closer} = useChat()

        const handleChange = (e : ChangeEvent<HTMLInputElement>) =>{
            setreq(e.currentTarget.value)
            
        }

        const empty = () =>{
          setAns([ ])
        }



        const messagesEndRef = useRef<HTMLDivElement>(null);



        useEffect(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
          }, [ans]);


        useEffect(() => {

          if (!loading) return; 

           if (!req) return;

          const caller : answer = {
            from : "user",
            cont :req
          }  


          setAns((prev)=>[...prev, caller])
          const call = async () =>{


           

            const prompt = `
                          Tu es un modèle d'intelligence artificielle conçu pour répondre uniquement sur la base des informations suivantes : ${JSON.stringify(data)} et celle que tu peux fournir à propos tu parler des
                          de sport, la cuisine, l'art, l'actualites , le cinema, les mangas, .... ne parle pas de choses qui ne sont pas dans les données et celle que tu peux fournir à propos de ces sujets.

                          Voici les instructions impératives que tu dois suivre :

                          1. Ta réponse doit exclusivement s'appuyer sur ces données. Tu ne dois pas inventer d'information qui n'y figure pas.
                          2. Si la question n'a aucune réponse possible dans ces données, indique clairement que tu n'as pas trouvé la réponse exacte et propose éventuellement une information approchante provenant des données, mais rien d'inventé.
                          3. Si la question est hors sujet, indique poliment que tu ne peux répondre que sur le périmètre couvert par les données fournies.
                          4. Si plusieurs éléments pertinents sont trouvés, propose une synthèse claire.
                          5. Ne complète pas avec des connaissances extérieures ou des suppositions.
                          6. si des images sont iclus dans les donnes, ne les mentionnent pas. tiens compte de la date actuelle lors de tes reponses
                          7. tiens compte de la conversation . tu dois repondre au message tout en conservant une memoire des derniers messages : ${JSON.stringify(ans)}
                          8.tu es capable de discuter et dee comprendre un camerounais
                          9. tu t'appelle ducobu 
                          10. tu peux aussi tenir une conversation avec un utilisateur au cas ou il n'as pas vraiment de questions. tu parler des
                          sujets tels que le sport, la cuisine, l'art, l'actualites , le cinema, les mangas, ....
                          11. tu peux aussi jouer à des devinettes, raconter des charades, ...

                          Voici la question de l'utilisateur :

                          "${req}"

                          Réponds de façon claire et concise, en français.
                          `


            
            try {
                
            const res = await axios.post(
              url,
              {
                contents:[
                  {
                    parts : [
                      {
                        text : prompt
                      }
                    ]
                  }
                ]
              },
              {
                headers : {
                  "Content-Type": "application/json",
                  "X-goog-api-key": key
                }
              }
            )

            const nouvelle : answer = {
              from : "chatbot",
              cont :res.data.candidates?.[0]?.content?.parts?.[0]?.text
            }            
            setAns((prev)=>[...prev, nouvelle])
              } catch (e){setAns((prev)=>[...prev,{from:"chatbot", cont : `erreur lors de la requete!!   veuillez verifier votre connexion internet`}])
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });} 
              finally{
                setloading(false)
                setreq("")
              }
          }

            call()

          
        }, [loading])
        
        const handleSend = () => {
          if (req.trim() === "") return;
          setloading(true);
        };
        



  return (
    <div className="w-full md:w-[50vw]  bg-base-300 mb-4 h-full md:h-[70vh] card  ">
      <div className=" flex w-full justify-between  p-4 bg-base-100">
        <h2 className="text-2xl text-secondary capitalize">hy i'm chatbot</h2>
        <div className="flex gap-3">
            <button onClick={empty}>
                <Trash className="btn btn-primary mx-auto"/>
            </button>
            <button onClick={closer}>
            <X className="mx-auto btn btn-primary" />
            </button>
        </div>
      </div>
      <div id="received" className="p-2 mb-20 space-y-2 overflow-y-auto h-[calc(70vh-100px)]">
            {ans.map((message, i) => (
              <div
                key={i}
                className={`chat ${message.from === "chatbot" ? "chat-start" : "chat-end"}`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt={`${message.from} avatar`}
                      src={
                        message.from === "chatbot"
                          ? "https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                          : "https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                      }
                    />
                  </div>
                </div>
                <div className="chat-header">
                  {message.from === "chatbot" ? "Chatbot" : "Vous"}
                  <time className="text-xs opacity-50 ml-1">
                    {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </time>
                </div>
                <div className="chat-bubble chat-bubble-info rounded-4xl">{message.cont}</div>
                <div className="chat-footer opacity-50">
                  {message.from === "chatbot" ? "Répondu" : "Envoyé"}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
      </div>
            
      <div className="bottom-3 left-2 absolute w-full gap-2 flex">
            <input type="text"  value={req}   onChange={(e) => {handleChange(e)}} onKeyDown={(e) => {
                if (e.key === "Enter" && !loading && req.trim() !== "") {
                  handleSend();
                }
              }}
              className="input In w-full" />
            
                {req !== "" ? (
                      loading ? (
                        <button className="btn-primary btn" disabled>
                          <Loader />
                        </button>
                      ) : (
                        <button className="btn-primary btn" onClick={handleSend}>
                          <Send />
                        </button>
                      )
                    ) : (
                      <button className="btn-primary btn" disabled>
                        <Send />
                      </button>
                    )
            }


        </div>


    </div>
  )
}

export default Gemini
