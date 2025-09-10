'use client'
import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import type { Swiper as SwiperType } from 'swiper'

export default function BrandCarouselClient({ items }: { items: string[] }) {
  const logos = items?.length
    ? items
    : [
        '/assets/images/thumbs/brand-img1.png',
        '/assets/images/thumbs/brand-img2.png',
        '/assets/images/thumbs/brand-img3.png',
        '/assets/images/thumbs/brand-img4.png',
        '/assets/images/thumbs/brand-img5.png',
        '/assets/images/thumbs/brand-img6.png',
        '/assets/images/thumbs/brand-img7.png',
      ]

  const swiperRef = useRef<SwiperType | null>(null)
  useEffect(() => {
    const id = setInterval(() => {
      swiperRef.current?.slideNext(420)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-white border-t border-neutral-200 py-2">
      <div className="container px-0">
        <Swiper
          className="brand-swiper"
          onSwiper={(s) => (swiperRef.current = s)}
          dir="rtl"
          loop
          centeredSlides={false}
          slidesPerGroup={1}
          spaceBetween={0}
          allowTouchMove
          breakpoints={{
            0:    { slidesPerView: 2 },
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 2 },
            1920: { slidesPerView: 2 },
          }}
        >
          {logos.concat(logos).map((src, i) => (
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
