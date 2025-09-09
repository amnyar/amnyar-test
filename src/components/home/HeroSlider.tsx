import fs from 'fs'
import path from 'path'
import HeroSliderClient from './HeroSliderClient'

export default function HeroSlider() {
  const dir = path.join(process.cwd(), 'public', 'assets', 'hero')
  let images: string[] = []
  try {
    images = fs
      .readdirSync(dir)
      .filter(f => /\.(png|jpe?g|webp|svg|gif)$/i.test(f))
      .sort()
      .map(f => `/assets/hero/${f}`)
  } catch {}
  return <HeroSliderClient images={images} />
}
