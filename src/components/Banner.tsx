'use client'

import { motion as m } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: .75 } }
}

export default function Banner() {
  return (
    <section className="min-h-screen flex items-center">
      <m.div variants={container} initial="hidden" animate="show">
        <m.h2 variants={item} className="text-5xl font-extrabold text-center mb-3">Something On Your <strong>Mind?</strong></m.h2>
        <m.p variants={item} className="text-xl text-center">At <span className="font-bold">XHunter</span> we bring your ideas to life, <span className="font-bold">now.</span></m.p>
      </m.div>
    </section>
  )
}