import HeroSlider from '@/components/home/HeroSlider'
import ClientsStrip from '@/components/home/ClientsStrip'
import AboutIntro from '@/components/home/AboutIntro'
import TechSolution from '@/components/home/TechSolution'
import ShowcaseSlider from '@/components/home/ShowcaseSlider'
import Features from '@/components/home/Features'
import Services from '@/components/home/Services'
import Pricing from '@/components/home/Pricing'
import ServerPricing from '@/components/home/ServerPricing'
import Testimonials from '@/components/home/Testimonials'
import Stats from '@/components/home/Stats'
import BlogTeasers from '@/components/home/BlogTeasers'

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <ClientsStrip />
      <AboutIntro />
      <TechSolution />
      <ShowcaseSlider />
      <Features />
      <Services />
      <Pricing />
      <ServerPricing />
      <Testimonials />
      <Stats />
      <BlogTeasers />
    </main>
  )
}
