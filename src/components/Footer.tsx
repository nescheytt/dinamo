'use client'

import { motion as m } from 'framer-motion'
import SwitcherTheme from './SwitcherTheme'

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
    <m.footer variants={container} initial="hidden" animate="show" className="w-full flex flex-col md:flex-row md:items-center justify-between">
      <m.div variants={item} className="flex gap-10 items-center">
        <p className="text-zinc-500 dark:text-zinc-400">© 2023 XHunterTech</p>
        <SwitcherTheme />
      </m.div>

      <m.ol variants={item} className="flex justify-end gap-10">
        <li className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900">Home</li>
        <li className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900">About</li>
        <li className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900">Contact</li>
      </m.ol>
    </m.footer>
  )
}