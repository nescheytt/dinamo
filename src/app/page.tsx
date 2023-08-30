import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Gradient from '@/components/Gradient'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-between py-12 px-5 lg:px-24 relative bg-zinc-900 overflow-hidden'>
      <Gradient />
      <Header />
      <Banner />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
