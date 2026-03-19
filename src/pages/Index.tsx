import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  )
}
