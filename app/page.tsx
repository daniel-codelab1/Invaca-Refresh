import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { FeaturedMalls } from '@/components/sections/FeaturedMalls'
import { AboutSummary } from '@/components/sections/AboutSummary'
import { NewsSection } from '@/components/sections/NewsSection'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <FeaturedMalls />
      <AboutSummary />
      <NewsSection />
      <CTA />
    </div>
  )
}
