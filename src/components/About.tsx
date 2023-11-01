'use client'

import { useRef } from 'react'
import { motion as m } from 'framer-motion'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import Heading from './ui/Heading'
import Lead from './ui/Lead'
import AnimateStar from '@/components/AnimateStar'
import animationGeometryc from '@/assets/images/animation_geometryc.json'
import animationDots from '@/assets/images/animation_dots.json'
import animationCircle from '@/assets/images/animation_circle.json'

type ListItems = {
  title: string
  description: string
  animation: JSX.Element
}

export default function About() {
  const lottieAnimationARef = useRef<LottieRefCurrentProps>(null)
  const lottieAnimationBRef = useRef<LottieRefCurrentProps>(null)
  const lottieAnimationCRef = useRef<LottieRefCurrentProps>(null)

  const listItems: ListItems[] = [
    {
      title: 'Optimization',
      description: 'Navigate your digital products at light speed. Scroll in peace.',
      animation:
        <Lottie
          lottieRef={lottieAnimationARef}
          animationData={animationGeometryc}
          onMouseEnter={() => { lottieAnimationARef.current?.play() }}
          onMouseLeave={() => { lottieAnimationARef.current?.pause() }}
          loop={true}
          autoplay={false}
          style={{ width: '250px' }}
        />
    },
    {
      title: 'Dynamic Design',
      description: 'Modern designs for your product.',
      animation:
        <Lottie
          lottieRef={lottieAnimationBRef}
          animationData={animationDots}
          onMouseEnter={() => { lottieAnimationBRef.current?.play() }}
          onMouseLeave={() => { lottieAnimationBRef.current?.pause() }}
          loop={true}
          autoplay={false}
          initialSegment={[40, 130]}
          style={{ width: '100%', height: '100%', transform: 'translateY(-15%)' }}
        />
    },
    {
      title: 'Consultancy',
      description: 'We answer all your questions record time.',
      animation:
        <Lottie
          lottieRef={lottieAnimationCRef}
          animationData={animationCircle}
          onMouseEnter={() => { lottieAnimationCRef.current?.play() }}
          onMouseLeave={() => { lottieAnimationCRef.current?.pause() }}
          loop={true}
          autoplay={false}
          style={{ width: '250px' }}
        />
    }
  ]

  return (
    <section id="about" className='w-full min-h-screen flex flex-col items-center justify-center gap-10 md:gap-20'>
      <div className='max-w-xl'>
        <Heading>What&apos;s Dinamo!?</Heading>
        <Lead>We take care of making your user interface shine with modern designs, clean code and a fully optimized application.</Lead>
      </div>

      <m.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1.50, duration: 1.50 } }} viewport={{ once: true }}
        className='w-full lg:max-w-6xl flex flex-col lg:flex-row gap-5 lg:gap-10'
      >
        {listItems.map((item, index: number) => (
          <div key={index} className='w-full relative transition duration-1000 ring-2 ring-zinc-600 ring-inset rounded-xl p-[1px] bg-animation'>
            <div className='h-full rounded-xl z-10 relative bg-zinc-900 hover:bg-zinc-800 p-6 animation ease-in-out duration-500'>
              <div className='max-h-[250px] flex justify-center overflow-hidden mb-4'>{item.animation}</div>
              <h3 className='text-zinc-200 text-lg font-bold mb-2'>{item.title}</h3>
              <p className='text-md font-light text-zinc-400'>{item.description}</p>
            </div>
          </div>
        ))}
      </m.div>

      <AnimateStar />
    </section>
  )
}