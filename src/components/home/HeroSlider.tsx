import fs from 'fs'
import path from 'path'
import HeroSliderClient from './HeroSliderClient'

export default function HeroSlider() {
  const thumbsDir = path.join(process.cwd(), 'public', 'assets', 'images', 'thumbs')
  let images: string[] = []
  try {
    images = fs
      .readdirSync(thumbsDir)
      .filter(f => f.startsWith('banner-img'))
      .sort()
      .map(f => `/assets/images/thumbs/${f}`)
  } catch {}

  if (images.length === 0) images = ['/assets/images/thumbs/banner-img.png']

  const content = {
    title: 'از طریق راه‌حل‌های استراتژیک وابسته، تجارت خود را متحول کنید',
    description:
      'در تجارت رقابتی امروز، تقاضا برای راه‌حل‌های کارآمد و مقرون‌به‌صرفه فناوری اطلاعات هرگز مهم‌تر نبوده است.',
    buttonText: 'شروع کردن',
    buttonLink: '/register.html',
  }

  return <HeroSliderClient images={images} content={content} />
}
