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
        <li>
          <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">Home</a>
        </li>
        <li>
          <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">About</a>
        </li>
        <li>
          <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">Contact</a>
        </li>
      </m.ol>

      <m.div variants={item} className="flex justify-between gap-10">
        <p className="text-sm"><strong>XHunter</strong> © 2023</p>
      </m.div>
    </m.footer>
  )
}