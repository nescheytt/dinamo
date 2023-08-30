'use client'

import { motion as m } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 1 }}
}
export default function Lead({ children } : { children: string }) {
  return (
    <m.p variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className='text-base md:text-xl text-center font-light text-zinc-400'>
      {children}
    </m.p>
  )
}