import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-12 px-24 relative">
      <div className="w-full min-h-screen bg-gradient-to-r from-indigo-500 opacity-50 absolute left-0 top-0">
        <div
          style={{ 
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundSize: '57px 57px',
            backgroundImage: 'linear-gradient(hsla(239, 84%, 67%, 0.09) .1em, transparent 0), linear-gradient(90deg, hsla(239, 84%, 67%, 0.09) .1em, transparent 0)'
          }}
        />
      </div>
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
