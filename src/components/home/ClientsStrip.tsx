import SmartImage from '@/components/ui/SmartImage'
import { listImages, firstExistingDir } from '@/lib/asset-utils'

export default function ClientsStrip() {
  const dir = firstExistingDir(['assets/clients', 'clients']) || ''
  const logos = dir ? listImages(dir) : []
  const base = (logos.length ? logos : [
    '/assets/images/thumbs/brand-img1.png',
    '/assets/images/thumbs/brand-img2.png',
    '/assets/images/thumbs/brand-img3.png',
    '/assets/images/thumbs/brand-img4.png',
  ])
  const tape = Array.from({ length: 4 }).flatMap(() => base)

  return (
    <section className="bg-white border-t border-neutral-100 py-4 shadow-sm">
      <div className="container px-0">
        <div className="marquee">
          <div className="marquee__inner">
            {tape.map((src, i) => (
              <div key={i} className="flex h-16 w-36 items-center justify-center">
                <SmartImage src={src} alt="" width={120} height={36} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
