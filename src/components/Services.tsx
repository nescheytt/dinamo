'use client'

import { useRef } from 'react'
import { motion as m } from 'framer-motion'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import AnimateStar from '@/components/AnimateStar'
import animationAbstract from '@/assets/images/animation_abstract.json'
import animationLine from '@/assets/images/animation_line.json'
import animationTriangle from '@/assets/images/animation_triangle.json'

export default function Services() {
  const lottieAnimationARef = useRef<LottieRefCurrentProps>(null) 
  const lottieAnimationBRef = useRef<LottieRefCurrentProps>(null)
  const lottieAnimationCRef = useRef<LottieRefCurrentProps>(null)

  return (
    <section className='w-full lg:max-w-6xl flex flex-col items-center justify-center gap-10 md:gap-20'>
      <div className='max-w-3xl'>
        <m.h3
          initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .75 } }} viewport={{ once: true }}
          className='w-full text-xl md:text-4xl font-extrabold text-zinc-200 text-center mb-3'
        >
          A full-service digital innovation partner
        </m.h3>

        <m.p
          initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0, transition: { delay: .75, duration: .75 } }} viewport={{ once: true }}
          className='text-base md:text-xl text-center font-light text-zinc-400'>
          Our rich design and technology expertise delivers top brands and digital experiences.
        </m.p>
      </div>

      <m.div
        className='w-full h-full bg-zinc-900 hover:bg-zinc-800 flex items-center gap-20 animation ease-in-out duration-500 ring-1 ring-zinc-800 ring-inset rounded-xl px-6 py-12 md:p-24 relative overflow-hidden'
        onMouseEnter={() => { lottieAnimationARef.current?.play() }}
        onMouseLeave={() => { lottieAnimationARef.current?.pause() }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: .75, duration: .75 } }}
        viewport={{ once: true }}
      >
        <div className='flex flex-col'>
          <h3 className='w-full text-xl md:text-4xl font-extrabold text-zinc-200 mb-3'>
            Digital Products
          </h3>
          <p className='text-base md:text-xl font-light text-zinc-400 mix-blend-diference'>
            At XHunter, we believe everyone deserves an exceptional user experience, whether using a product at work or in their free time. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.
          </p>
        </div>
        <div className='absolute top-24 -right-32 lg:top-0 lg:right-0 opacity-75'>
          <Lottie lottieRef={lottieAnimationARef} animationData={animationTriangle} loop={true} autoplay={false} />
        </div>
      </m.div>

      <m.div
        className='w-full h-full bg-zinc-900 hover:bg-zinc-800 flex justify-end gap-20 animation ease-in-out duration-500 ring-1 ring-zinc-800 ring-inset rounded-xl px-6 py-12 md:p-24 relative overflow-hidden'
        onMouseEnter={() => { lottieAnimationBRef.current?.play() }}
        onMouseLeave={() => { lottieAnimationBRef.current?.pause() }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 1, duration: .75 } }}
        viewport={{ once: true }}
      >
        <div className='w-[500px] absolute md:top-[30px] lg:top-[-70px] md:-left-[160px] lg:left-0 opacity-75'>
          <Lottie lottieRef={lottieAnimationBRef} animationData={animationAbstract} autoplay={false} loop={true} />
        </div>
        <div className='w-full lg:max-w-3xl flex flex-col'>
          <h3 className='w-full text-xl md:text-4xl font-extrabold text-right text-zinc-200 mb-3'>
            Websites
          </h3>
          <p className='text-base md:text-xl font-light text-right text-zinc-400 mix-blend-diference'>
            A website is the most important channel to showcase your brand to customers. Our portfolio features award-winning websites designed to give users the best experience possible while also meeting business goals.
          </p>
        </div>
      </m.div>

      <m.div
        className='w-full h-full bg-zinc-900 hover:bg-zinc-800 flex items-center gap-20 animation ease-in-out duration-500 ring-1 ring-zinc-800 ring-inset rounded-xl px-6 py-12 md:p-24 relative overflow-hidden'
        onMouseEnter={() => { lottieAnimationCRef.current?.play() }}
        onMouseLeave={() => { lottieAnimationCRef.current?.pause() }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 1.25, duration: .75 } }}
        viewport={{ once: true }}
      >
        <div className='flex flex-col'>
          <h3 className='w-full text-xl md:text-4xl font-extrabold text-zinc-200 mb-3'>
            Development
          </h3>
          <p className='text-base md:text-xl font-light text-zinc-400 mix-blend-diference'>
          Our designers and developers collaborate to create websites and products that provide exceptional user experiences and functionality. We optimize search engine visibility, ensure accessibility, and maximize performance.
          </p>
        </div>
        <div className='absolute lg:top-[-250px] md:right-0 opacity-75'>
          <Lottie lottieRef={lottieAnimationCRef} animationData={animationLine} loop={true} autoplay={false} />
        </div>
      </m.div>

      <AnimateStar />
    </section>
  )
}