'use client'

import { motion as m } from 'framer-motion'

export default function AnimateStar() {
  return (
    <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .75 }} className='w-full relative'>
      <div className='animate-shooting-star' /> 
    </m.div>
  )
}