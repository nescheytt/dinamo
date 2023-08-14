import Gradient from '@/components/Gradient'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-12 px-5 md:px-24 relative bg-zinc-900">
      <Gradient />
      <Header />
      <Banner />
      <About />

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

      <Contact />
      <Footer />
    </main>
  )
}
