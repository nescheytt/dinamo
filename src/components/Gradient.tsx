import Image from 'next/image'
import heroGradient from '@/assets/images/hero-gradient.png'

export default function Gradient() {
  return (
    <div className="w-full min-h-screen absolute left-0 top-0">
      <Image src={heroGradient} alt="hero gradient" className="w-full h-full opacity-30" />
    </div>
  )
}