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
    <section className='max-w-2xl min-h-screen flex items-center'>
      <m.div variants={container} initial='hidden' animate='show'>
        <m.h2 variants={item} className='text-4xl md:text-7xl font-bold text-center md:mb-3'>Something On Your Mind?</m.h2>
        <m.p variants={item} className='text-base md:text-xl text-center text-zinc-400'>At XHunter we bring your ideas to life, now.</m.p>
      </m.div>
    </section>
  )
}