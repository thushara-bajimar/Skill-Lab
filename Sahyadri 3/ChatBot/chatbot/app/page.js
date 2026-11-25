"use client"

import { useState } from "react"

export default function Home() {

  const [message, setMessage] = useState("")
  const [chat, setChat] = useState([])
  const [loading, setLoading] = useState(false)

  async function sendMessage() {

    if (!message.trim() || loading) return

    const userMessage = message.trim()
    const messages = [
      ...chat
        .filter(item => !item.isError)
        .map(item => ({
          role: item.sender === "You" ? "user" : "model",
          text: item.text,
        })),
      { role: "user", text: userMessage },
    ]

    setChat(prev => [
      ...prev,
      { sender: "You", text: userMessage }
    ])

    setMessage("")
    setLoading(true)

    try {

      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages,
        })
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || "API request failed")
      }

      if (typeof data.reply !== "string" || !data.reply.trim()) {
        throw new Error("The AI returned an empty response. Please try again.")
      }

      setChat(prev => [
        ...prev,
        { sender: "Bot", text: data.reply }
      ])

    } catch (error) {

      console.error(error)

      setChat(prev => [
        ...prev,
        { sender: "Bot", text: error.message || "Something went wrong!", isError: true }
      ])

    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: "30px" }}>

      <div className="mx-auto flex max-w-xl items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-blue-200 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 border-4 border-double">
        <div aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
          <img src = "https://img.magnific.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?semt=ais_hybrid&w=740&q=80"/>
        </div>
        <div>
          <div className="text-xl font-medium text-blue-800 dark:text-white"><h1>My AI Chatbot</h1></div>
          <p className="text-gray-500 dark:text-gray-400">Chat With The AI!</p>
        </div>
        <br></br>
        <div>
        {chat.map((item, index) => (
          <div key={index}>
            <b>{item.sender}:</b>
            <p>{item.text}</p>
          </div>
        ))}

        {loading && <p>Bot is typing...</p>}

        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          disabled={loading}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage()
          }}
        />

        <button onClick={sendMessage} disabled={loading || !message.trim()}>
          {loading ? "Sending..." : "Send"}
        </button>
        </div>
      </div>
    </div>




  )
}

















// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.js
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
