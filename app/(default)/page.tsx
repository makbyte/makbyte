export const metadata = {
  title: 'MAK {Byte}',
  description: 'Makbyte, an avant-garde SaaS & Mobile Product firm, collaborates with leading Enterprises and Startups worldwide. Specializing in delivering top-notch Product Strategy and end-to-end SaaS/Mobile solutions, we redefine boundaries through bespoke software and strategic IT consulting services, pioneering innovation in the tech landscape.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  )
}
