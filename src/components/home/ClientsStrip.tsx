import SmartImage from '@/components/ui/SmartImage'
import { listImages, firstExistingDir } from '@/lib/asset-utils.server'

export default function ClientsStrip() {
  const dir = firstExistingDir(['assets/clients', 'clients']) || ''
  const logos = dir ? listImages(dir) : []
  const fallback = [
    '/assets/images/thumbs/brand-img1.png',
    '/assets/images/thumbs/brand-img2.png',
    '/assets/images/thumbs/brand-img3.png',
    '/assets/images/thumbs/brand-img4.png',
    '/assets/images/thumbs/brand-img5.png',
    '/assets/images/thumbs/brand-img6.png',
    '/assets/images/thumbs/brand-img7.png',
    '/assets/images/thumbs/brand-img3.png'
  ]
  const items = (logos.length ? logos : fallback).slice(0, 12)

  return (
    <section className="brand-strip">
      <div className="brand-marquee">
        <div className="brand-track">
          {items.concat(items).map((src, i) => (
            <div key={i} className="brand-cell">
              <SmartImage src={src} alt="brand" width={140} height={40} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
