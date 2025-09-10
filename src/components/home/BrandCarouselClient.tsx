'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'

export default function BrandCarouselClient({ items }: { items: string[] }) {
  const logos = (items && items.length ? items : [
    '/assets/images/thumbs/brand-img1.png',
    '/assets/images/thumbs/brand-img2.png',
    '/assets/images/thumbs/brand-img3.png',
    '/assets/images/thumbs/brand-img4.png',
    '/assets/images/thumbs/brand-img5.png',
    '/assets/images/thumbs/brand-img6.png',
    '/assets/images/thumbs/brand-img7.png',
  ]).concat([
    '/assets/images/thumbs/brand-img1.png',
    '/assets/images/thumbs/brand-img2.png',
    '/assets/images/thumbs/brand-img3.png',
    '/assets/images/thumbs/brand-img4.png',
    '/assets/images/thumbs/brand-img5.png',
    '/assets/images/thumbs/brand-img6.png',
    '/assets/images/thumbs/brand-img7.png',
  ])

  return (
    <section className="bg-white border-t border-neutral-200 py-2">
      <div className="container px-0">
        <Swiper
          className="brand-swiper-logos"
          modules={[Autoplay]}
          dir="rtl"
          loop
          centeredSlides={false}
          slidesPerGroup={1}
          spaceBetween={0}
          speed={420}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0:    { slidesPerView: 2 },
            640:  { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
            1440: { slidesPerView: 8 },
            1920: { slidesPerView: 10 },
          }}
          observer
          observeParents
          allowTouchMove
        >
          {logos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="brand-cell">
                <Image alt="" src={src} width={160} height={48} className="object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
