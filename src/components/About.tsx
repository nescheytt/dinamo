'use client'

import { motion as m } from 'framer-motion'

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center border-b border-gray-700 gap-10 md:gap-20">
      <div className="max-w-xl">
          <m.h3
            initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0, transition: { duration: .75 } }}
            className="w-full text-4xl font-extrabold text-zinc-200 text-center mb-3"
          >
            {`What's XHunter!?`}
          </m.h3>
        <m.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0, transition: { delay: .75, duration: .75 } }} className="text-xl text-center font-light text-zinc-400">
          We take care of making your user interface shine with modern designs, clean code and a fully optimized application.
        </m.p>
      </div>

      <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1.50, duration: 1.50 } }} className="max-w-6xl flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="w-full relative transition duration-1000 ring-2 ring-zinc-600 ring-inset rounded-xl p-[1px] bg-animation">
          <div className="h-full rounded-xl z-10 relative bg-white dark:bg-zinc-900 hover:dark:bg-zinc-800 p-4 animation ease-in-out duration-500">
            <h3 className="text-lg font-bold mb-2">Optimization</h3>
            <p className="text-md font-light text-zinc-400">
              Navigate your digital products at light speed. Scroll in peace.
            </p>
          </div>
        </div>

        <div className="w-full relative transition duration-1000 ring-2 ring-zinc-600 ring-inset rounded-xl p-[1px] bg-animation">
          <div className="h-full rounded-xl z-10 relative bg-white dark:bg-zinc-900 hover:dark:bg-zinc-800 p-4 animation ease-in-out duration-500">
            <h3 className="text-lg font-bold mb-2">Dynamic Design</h3>
            <p className="text-md font-light text-zinc-400">
              Modern designs for your product.
            </p>
          </div>
        </div>

        <div className="w-full relative transition duration-1000 ring-2 ring-zinc-600 ring-inset rounded-xl p-[1px] bg-animation">
          <div className="h-full rounded-xl z-10 relative bg-white dark:bg-zinc-900 hover:dark:bg-zinc-800 p-4 animation ease-in-out duration-500">
            <h3 className="text-lg font-bold mb-2">Consultancy</h3>
            <p className="text-md font-light text-zinc-400">
              We answer all your questions in record time.
            </p>
          </div>
        </div>
      </m.div>
    </section>
  )
}