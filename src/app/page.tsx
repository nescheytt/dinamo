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
      <section className="max-w-lg min-h-screen flex flex-col items-center justify-center">
        <h3 className="w-full text-5xl font-extrabold text-left mb-3">About</h3>
        <p className="text-xl text-left font-light">Consectetur aliqua culpa culpa tempor occaecat amet sunt amet eu aliquip enim reprehenderit. Duis fugiat magna quis excepteur et quis fugiat fugiat esse. Minim consequat adipisicing eiusmod ea quis fugiat anim voluptate. Velit quis tempor deserunt ipsum. Non labore duis do irure mollit incididunt occaecat.</p>
      </section>
      <Footer />
    </main>
  )
}
  