'use client'

import { motion as m } from 'framer-motion'

export default function Contact() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center gap-5 lg:gap-10'>
      <m.h3 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.50 } }} className='w-full text-4xl lg:text-6xl font-bold text-gray-300 text-center'>
        Start with Dinamo, today.
      </m.h3>

      <m.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.50 } }}
        href='mailto:contact@dinamo.com'
        className='
          text-lg lg:text-2xl font-light relative
          before:absolute before:left-0 before:-bottom-1 before:h-[1px] before:w-full before:z-50 before:bg-zinc-200 before:origin-left before:scale-x-0 before:transition-transform hover:before:scale-x-100
          after:absolute after:left-0 after:-bottom-1 after:z-0 after:h-[1px] after:w-full after:bg-zinc-600'
      >
        hey@dinamo.com
      </m.a>
    </section>
  )
}