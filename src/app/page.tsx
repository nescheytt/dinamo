import Gradient from '@/components/Gradient'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-12 px-5 lg:px-24 relative bg-zinc-900 overflow-hidden">
      <Gradient />
      <Header />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
