import HeroSlider from '@/components/home/HeroSlider'
import BrandCarousel from '@/components/home/BrandCarousel'
import AboutIntro from '@/components/home/AboutIntro'
import TechSolution from '@/components/home/TechSolution'
import ShowcaseSlider from '@/components/home/ShowcaseSlider'
import Features from '@/components/home/Features'
import Services from '@/components/home/Services'
import Pricing from '@/components/home/Pricing'
import Testimonials from '@/components/home/Testimonials'
import Stats from '@/components/home/Stats'
import BlogTeasers from '@/components/home/BlogTeasers'

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <BrandCarousel />
      <AboutIntro />
      <TechSolution />
      <ShowcaseSlider />
      <Features />
      <Services />
      <Pricing />
      <Testimonials />
      <Stats />
      <BlogTeasers />
    </main>
  )
}
