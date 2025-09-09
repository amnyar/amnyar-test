import { listImages, firstExistingDir } from '@/lib/asset-utils.server'
import BrandCarouselClient from './BrandCarouselClient'

export default function BrandCarousel() {
  const dir = firstExistingDir(['assets/clients', 'clients']) || ''
  const items = dir ? listImages(dir) : []
  return <BrandCarouselClient items={items} />
}
