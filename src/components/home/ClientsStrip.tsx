'use client'

import SmartImage from '@/components/ui/SmartImage'
import { listImages, firstExistingDir } from '@/lib/asset-utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function ClientsStrip() {
  const dir = firstExistingDir(['assets/clients', 'clients']) || ''
  const logos = dir ? listImages(dir) : []
  const base = (logos.length ? logos : [
    '/assets/images/thumbs/brand-img1.png',
    '/assets/images/thumbs/brand-img2.png',
    '/assets/images/thumbs/brand-img3.png',
    '/assets/images/thumbs/brand-img4.png',
    '/assets/images/thumbs/brand-img5.png',
    '/assets/images/thumbs/brand-img6.png',
    '/assets/images/thumbs/brand-img7.png',
  ])

  return (
    <section className="bg-white">
      <div className="brands-grid border-b border-dashed border-neutral-200">
        <Swiper
          modules={[Autoplay]}
          loop
          allowTouchMove={false}
          slidesPerView={2}
          speed={450}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 7 } }}
          className="brand-swiper"
        >
          {base.concat(base).map((src, i) => (
            <SwiperSlide key={i} className="h-[114px] flex items-center justify-center border-r border-dashed border-neutral-200 last:border-r-0">
              <div className="flex h-16 w-40 items-center justify-center">
                <SmartImage src={src} alt="" width={140} height={36} className="object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
