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
    <main className="min-h-screen bg-slate-100 p-0 sm:p-6">
      <section className="mx-auto flex h-dvh w-full max-w-3xl flex-col overflow-hidden bg-white shadow-sm sm:h-[calc(100dvh-3rem)] sm:rounded-2xl sm:border sm:border-slate-200 sm:shadow-xl">
        <header className="flex items-center gap-3 border-b border-slate-200 px-4 py-4 sm:px-6 bg-blue-200">
          <div
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl border border-blue-300"
          ><img src="https://img.magnific.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?semt=ais_hybrid&w=740&q=80" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
              My AI Chatbot
            </h1>
            <p className="text-sm text-slate-500">Chat with your AI assistant</p>
          </div>
        </header>

        <div
          aria-live="polite"
          className="flex-1 space-y-4 overflow-y-auto bg-blue-50 p-4 sm:p-6"
        >
          {chat.length === 0 && (
            <p className="pt-6 text-center text-sm text-slate-500">
              Send a message to get started.
            </p>
          )}

          {chat.map((item, index) => {
            const isUser = item.sender === "You"

            return (
              <div
                key={index}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm sm:max-w-[75%] ${isUser
                      ? "rounded-br-md bg-blue-600 text-white border-white"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-800"
                    }`}
                >
                  <p className="mb-1 text-xs font-medium opacity-70">
                    {isUser ? "You" : "AI"}
                  </p>
                  <p className="whitespace-pre-wrap wrap-break-word text-sm leading-6">
                    {item.text}
                  </p>
                </div>
              </div>
            )
          })}

          {loading && (
            <div className="flex justify-start">
              <p className="rounded-2xl rounded-bl-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                Bot is typing...
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-slate-200  bg-blue-200 p-4 sm:p-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <input
              type="text"
              aria-label="Type your message"
              placeholder="Type your message..."
              value={message}
              disabled={loading}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage()
              }}
              className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-blue-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !message.trim()}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </section>
    </main>
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
