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
    <m.footer variants={container} initial="hidden" animate="show" className="w-full flex flex-col md:flex-row justify-between gap-11 md:gap-0">
      <m.div variants={item} className="flex justify-center order-1 md:order-none">
        <p className="text-sm"><strong>XHunter</strong> © 2023</p>
      </m.div>

      <m.ol variants={item} className="flex justify-center md:justify-end gap-10">
        <li>
          <a href="/" className="
            text-sm text-zinc-400 hover:text-zinc-200
            relative
            before:absolute before:left-0 before:-bottom-1 before:h-[1px] before:w-full before:z-50 before:bg-zinc-200 before:origin-left before:scale-x-0 before:transition-transform hover:before:scale-x-100
            after:absolute after:left-0 after:-bottom-1 after:z-0 after:h-[1px] after:w-full after:bg-zinc-600">Home</a>
        </li>
        <li>
          <a href="/" className="
            text-sm text-zinc-400 hover:text-zinc-200
            relative
            before:absolute before:left-0 before:-bottom-1 before:h-[1px] before:w-full before:z-50 before:bg-zinc-200 before:origin-left before:scale-x-0 before:transition-transform hover:before:scale-x-100
            after:absolute after:left-0 after:-bottom-1 after:z-0 after:h-[1px] after:w-full after:bg-zinc-600">About</a>
        </li>
        <li>
          <a href="/" className="
            text-sm text-zinc-400 hover:text-zinc-200
            relative
            before:absolute before:left-0 before:-bottom-1 before:h-[1px] before:w-full before:z-50 before:bg-zinc-200 before:origin-left before:scale-x-0 before:transition-transform hover:before:scale-x-100
            after:absolute after:left-0 after:-bottom-1 after:z-0 after:h-[1px] after:w-full after:bg-zinc-600">Contact</a>
        </li>
      </m.ol>
    </m.footer>
  )
}