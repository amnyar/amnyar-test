import BrandCarouselClient from './BrandCarouselClient'
import { listImagesFromBrands } from '@/lib/asset-utils.server'

export default function BrandCarousel() {
  const items = listImagesFromBrands()  
  return <BrandCarouselClient items={items} />
}
