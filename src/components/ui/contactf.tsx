import { Mail, Notebook, Signature } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Form = () => {
  const [name, setname] = useState("")
  const [mail, setmail] = useState("")
  const [subj, setsubj] = useState("")
  const [mess, setmess] = useState("")
  const [submited, setsubmite] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (submited) {
      setLoading(true)
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", mail)
      formData.append("subject", subj)
      formData.append("message", mess)
      formData.append("_captcha", "false")

      fetch("https://getform.io/f/aejlmeob", {
        method: "POST",
        body: formData,
        headers :{
          "Accept": "application/json",
        }
      })
        .then((res) => {
          if (res.ok) {
            console.log("Form submitted ✅")
            // reset fields
            setname("")
            setmail("")
            setsubj("")
            setmess("")
          } else {
            console.error("Échec de la soumission")
          }
        })
        .catch((err) => console.error("Erreur réseau ❌", err))
        .finally(() => {
          setLoading(false)
          setsubmite(false)
        })
    }
  }, [submited])

  const handlesubmit = (e: React.MouseEvent) => {
    e.preventDefault() // ⛔ empêche le rechargement
    setsubmite(true)
  }

  return (
    <form className="w-full max-w-3xl mx-auto">
      <div className="grid h-[30vh] grid-cols-2 gap-4 w-full">
        <div className="flex flex-col justify-between">
          <label className="input h-12 w-full">
            <span className="label-text"><Signature /></span>
            <hr />
            <input
              type="text"
              placeholder="your name*"
              onChange={(e) => setname(e.target.value)}
              value={name}
              required
              className="bg-transparent"
            />
          </label>

          <label className="input h-12 w-full">
            <span className="label-text"><Mail /></span>
            <input
              type="email"
              placeholder="mail address*"
              value={mail}
              onChange={(e) => setmail(e.target.value)}
              required
              className="bg-transparent"
            />
          </label>

          <label className="input h-12 w-full">
            <span className="label-text"><Notebook /></span>
            <input
              type="text"
              placeholder="subject*"
              value={subj}
              onChange={(e) => setsubj(e.target.value)}
              required
              className="bg-transparent"
            />
          </label>
        </div>

        <textarea
          placeholder="message*"
          className="textarea w-full"
          value={mess}
          onChange={(e) => setmess(e.target.value)}
          required
        />
      </div>

      <div className="m-4 justify-around flex text-neutral">
        <button
          onClick={handlesubmit}
          className="input bg-success-content hover:cursor-pointer"
        >
          <h1 className="mx-auto">
            {loading ? "Envoi en cours..." : "Envoyer"}
          </h1>
        </button>
      </div>
    </form>
  )
}

export default Form
