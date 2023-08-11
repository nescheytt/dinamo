import Gradient from '@/components/Gradient'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-12 px-24 relative">
      <Gradient />
      <Header />
      <Banner />

      <section className="w-full min-h-screen flex flex-col items-center justify-center border-b border-gray-700 gap-20">
        <div>
          <h3 className="w-full text-3xl font-extrabold text-gray-300 text-center mb-3">
            {`What's XHunter?`}
          </h3>
          <p className="text-xl text-center font-light text-gray-500">Consectetur aliqua culpa culpa tempor occaecat amet sunt amet eu aliquip enim reprehenderit.</p>
        </div>

        <div className="max-w-6xl flex gap-10">
          <div className="w-full relative transition duration-1000 ring-2 ring-slate-500 ring-inset rounded-xl p-[1px] bg-animation">
            <div className="h-full rounded-xl z-10 relative bg-white dark:bg-black p-4">
              <h3 className="text-lg font-bold mb-2">Optimizations</h3>
              <p className="text-md font-light text-gray-500">
                Navigate your digital products at light speed. Scroll in peace.
              </p>
            </div>
          </div>

          <div className="w-full relative transition duration-1000 ring-2 ring-slate-500 ring-inset rounded-xl p-[1px] bg-animation">
            <div className="h-full rounded-xl z-10 relative bg-white dark:bg-black p-4">
              <h3 className="text-lg font-bold mb-2">Dynamic Design</h3>
              <p className="text-md font-light text-gray-500">
                Modern designs for your product.
              </p>
            </div>
          </div>

          <div className="w-full relative transition duration-1000 ring-2 ring-slate-500 ring-inset rounded-xl p-[1px] bg-animation">
            <div className="h-full rounded-xl z-10 relative bg-white dark:bg-black p-4">
              <h3 className="text-lg font-bold mb-2">Consultancy</h3>
              <p className="text-md font-light text-gray-500">
                We answer all your questions in record time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex items-center justify-center border-b border-gray-700 gap-20">
        <div className="max-w-lg">
          <h3 className="w-full text-3xl font-extrabold text-gray-300 text-center mb-3">
            Never miss a notification again
          </h3>
          <p className="text-xl text-center font-light text-gray-500">Tired of having to check your mails every 5 minutes or to open GitHub to see if you have new notifications? Volta is here to help you.</p>
        </div>

        <div className="max-w-lg">
          <h3 className="w-full text-3xl font-extrabold text-gray-300 text-center mb-3">
            Never miss a notification again
          </h3>
          <p className="text-xl text-center font-light text-gray-500">Tired of having to check your mails every 5 minutes or to open GitHub to see if you have new notifications? Volta is here to help you.</p>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center gap-20">
        <div className="max-w-lg">
          <h3 className="w-full text-3xl font-extrabold text-gray-300 text-center mb-3">
            Start with XHunter, today.
          </h3>

          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" className="border rounded-xl border-slate-600 h-[36px] bg-gray-950 px-4" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
