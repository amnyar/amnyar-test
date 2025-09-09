'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import SmartImage from '@/components/ui/SmartImage'

export default function BrandCarouselClient({ items }: { items: string[] }) {
  const logos = items.length ? items : [
    '/assets/images/thumbs/brand-img1.png',
    '/assets/images/thumbs/brand-img2.png',
    '/assets/images/thumbs/brand-img3.png',
    '/assets/images/thumbs/brand-img4.png',
    '/assets/images/thumbs/brand-img5.png',
    '/assets/images/thumbs/brand-img6.png',
    '/assets/images/thumbs/brand-img7.png'
  ]
  return (
    <section className="bg-white border-t border-neutral-200 py-2">
      <div className="container">
        <Swiper
          className="brand-swiper"
          modules={[Autoplay, FreeMode]}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          freeMode
          loop
          speed={3000}
          slidesPerView={2}
          breakpoints={{ 640: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 }, 1280: { slidesPerView: 7 } }}
        >
          {logos.concat(logos).map((src, i) => (
            <SwiperSlide key={i}>
              <div className="h-16 w-36 flex items-center justify-center">
                <SmartImage src={src} alt="brand" width={120} height={36} className="object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
