'use client'

import { motion as m } from 'framer-motion'
import { menuItems } from '@/constants/menuItems'
import Link from './Link'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 }}
}

const item = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: .75 }}
}

export default function Header() {
  return (
    <m.header variants={container} initial='hidden' animate='show' className='absolute'>
      <m.ol variants={item} initial='hidden' animate='show' className='flex gap-10'>
        {menuItems.map((link, index: number) => (
          <li key={index}>
            <Link label={link.label} url={link.url} className='text-sm text-zinc-400 hover:text-zinc-100' />
          </li>
        ))}
      </m.ol>
    </m.header>
  )
}
