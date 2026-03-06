import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { FeaturedMalls } from '@/components/sections/FeaturedMalls'
import { CompanyIntro } from '@/components/sections/CompanyIntro'
import { InvestorSection } from '@/components/sections/InvestorSection'
import { UrbanProjects } from '@/components/sections/UrbanProjects'
import { NewsSection } from '@/components/sections/NewsSection'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Hero />
      <Stats />
      <FeaturedMalls />
      <CompanyIntro />
      <InvestorSection />
      <UrbanProjects />
      <NewsSection />
      {/* <CTA /> */}
    </div>
  )
}
