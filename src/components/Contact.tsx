'use client'

import { motion as m } from 'framer-motion'

export default function Contact() {
  return (
    <section className="max-w-lg min-h-screen flex flex-col items-center justify-center gap-10">
      <m.h3 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.50 } }} className="w-full text-4xl font-bold text-gray-300 text-center mb-3">
        Start with XHunter, today.
      </m.h3>

      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.50 } }}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-pink-800"
      >
        <span className="flex items-center justify-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-900 rounded-md group-hover:bg-opacity-0 gap-2">
          Send email
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </m.button>
    </section>
  )
}