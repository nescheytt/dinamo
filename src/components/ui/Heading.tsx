'use client'

import { motion as m } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 1 }}
}
export default function Heading({ children } : { children: string }) {
  return (
    <m.h2 variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className='w-full text-xl md:text-4xl font-extrabold text-zinc-200 text-center mb-3'>
      {children}
    </m.h2>
  )
}