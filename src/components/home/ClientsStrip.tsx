import SmartImage from '@/components/ui/SmartImage'
import { listImages, firstExistingDir } from '@/lib/asset-utils'

export default function ClientsStrip() {
  const dir = firstExistingDir(['assets/clients', 'clients']) || ''
  const logos = dir ? listImages(dir) : []
  const items = (logos.length ? logos : ['/assets/images/thumbs/brand-img1.png','/assets/images/thumbs/brand-img2.png','/assets/images/thumbs/brand-img3.png']).slice(0,8)
  return (
    <section className="bg-white border-t border-neutral-100 py-4 shadow-sm">
      <div className="container">
        <div className="marquee">
          <div className="marquee__inner">
            {items.concat(items).map((src, i) => (
              <div key={i} className="flex h-16 w-36 items-center justify-center">
                <SmartImage src={src} alt="brand" width={120} height={36} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
