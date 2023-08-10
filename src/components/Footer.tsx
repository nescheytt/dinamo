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

export default function Footer() {
  return (
    <m.footer variants={container} initial="hidden" animate="show" className="w-full flex flex-col justify-between">
      <m.ol variants={item} className="flex justify-end gap-10">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </m.ol>

      <m.div variants={item} className="flex justify-between gap-10">
        <p>© 2023 XHunterTech</p>
      </m.div>
    </m.footer>
  )
}