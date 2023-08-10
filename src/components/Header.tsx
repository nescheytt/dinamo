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
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: .75 } }
}

export default function Header() {
  return (
    <m.header variants={container} initial="hidden" animate="show" className="absolute">
      <m.ol variants={item} initial="hidden" animate="show" className="flex gap-10">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </m.ol>
    </m.header>
  )
}
