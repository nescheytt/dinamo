'use client'

import { motion as m } from 'framer-motion'
import Gradient from '@/components/Gradient'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .75,ease: "easeOut" }} className="min-h-screen flex flex-col items-center justify-between py-12 px-5 md:px-24 relative bg-white dark:bg-zinc-900">
      <Gradient />
      <Header />
      <Banner />
      <About />

      <section className="w-full min-h-screen flex items-center justify-center border-b border-gray-700 gap-20">
        <div className="max-w-lg">
          <h3 className="w-full text-3xl font-extrabold text-gray-300 text-center mb-3">
            Never miss a notification again
          </h3>
          <p className="text-xl text-center font-light text-gray-500">Tired of having to check your mails every 5 minutes or to open GitHub to see if you have new notifications? Volta is here to help you.</p>
        </div>

        <div className="max-w-lg">
          <h3 className="w-full text-3xl font-extrabold text-gray-300 text-center mb-3">
            Never miss a notification again
          </h3>
          <p className="text-xl text-center font-light text-gray-500">Tired of having to check your mails every 5 minutes or to open GitHub to see if you have new notifications? Volta is here to help you.</p>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center gap-20">
        <div className="max-w-lg">
          <h3 className="w-full text-3xl font-extrabold text-gray-300 text-center mb-3">
            Start with XHunter, today.
          </h3>

          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" className="border rounded-xl border-slate-600 h-[36px] bg-gray-950 px-4" />
          </div>
        </div>
      </section>

      <Footer />
    </m.main>
  )
}
