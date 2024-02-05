export const metadata = {
  title: 'Home',
  description: 'Ticiwe Home',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Access from '@/components/access'
import Make from '@/components/make'
import Create from '@/components/create'
import Connect from '@/components/connect'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Access />
      <Make/>
      <Connect />
    </>
  )
}
