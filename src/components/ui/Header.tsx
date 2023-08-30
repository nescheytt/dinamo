'use client'

import { motion as m } from 'framer-motion'
import { menuItems } from '@/constants/menuItems'
import Link from './Link'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.50, ease: 'easeInOut' }}
}

export default function Header() {
  return (
    <m.header variants={container} initial='hidden' whileInView='visible' viewport={{ once: true }} className='w-full h-24 flex items-center justify-center absolute top-0'>
      <m.ol variants={item} className='flex gap-10'>
        {menuItems.map((link, index: number) => (
          <li key={index}>
            <Link label={link.label} url={link.url} className='text-sm text-zinc-400 hover:text-zinc-100' />
          </li>
        ))}
      </m.ol>
    </m.header>
  )
}
