'use client'

import { motion as m } from 'framer-motion'
import { menuItems } from '@/constants/menuItems'
import Link from './Link'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 }}
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: .75 }}
}

export default function Footer() {
  return (
    <m.footer variants={container} initial='hidden' whileInView='show' className='w-full flex flex-col md:flex-row justify-between gap-11 md:gap-0'>
      <m.div variants={item} className='flex justify-center order-1 md:order-none'>
        <Link label='XHunter © 2023' url='https://xhunter.vercel.app' className='text-sm text-zinc-400 hover:text-zinc-200'  />
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