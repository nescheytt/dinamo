'use client'

import { motion as m } from 'framer-motion'
import { menuItems } from '@/data/menu-items'
import Link from './Link'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const item = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
}

export default function Footer() {
  return (
    <m.footer variants={container} initial='hidden' whileInView='visible' viewport={{ once: true }} className='w-full flex flex-col md:flex-row justify-between gap-11 md:gap-0'>
      <m.div variants={item} className='flex justify-center order-1 md:order-none'>
        <Link label='Dinamo © 2023' url='/' className='text-sm text-zinc-400 hover:text-zinc-200' />
      </m.div>

      <m.ol variants={item} className='flex justify-center md:justify-end gap-10'>
        {menuItems.map((link, index: number) => (
          <li key={index}>
            <Link label={link.label} url={link.url} className='text-sm text-zinc-400 hover:text-zinc-200 relative animate-border-bottom' />
          </li>
        ))}
      </m.ol>
    </m.footer>
  )
}