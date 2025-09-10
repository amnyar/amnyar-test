'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'

type Props = { items?: string[] }

export default function BrandCarouselClient({ items = [] }: Props) {

  const logos = items

  if (!logos?.length) return null

  return (
    <section className="brand-full-bleed" dir="rtl" aria-label="Brand Logos">
      <Swiper
        className="brand-swiper-logos"
        modules={[Autoplay]}
        loop
        slidesPerGroup={1}
        centeredSlides={false}
        spaceBetween={0}
        speed={420}
        autoplay={{
          delay: 2000,               
          stopOnLastSlide: false,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0:    { slidesPerView: 2 },
          480:  { slidesPerView: 3 },
          768:  { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
          1536: { slidesPerView: 10 },
        }}
        loopAdditionalSlides={8}
        watchOverflow
        observer
        observeParents
        allowTouchMove
        onInit={(swiper) => {
         
          swiper.slideToLoop(0, 0, false)
        }}
      >
        {logos.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="brand-cell">
              <Image alt="" src={src} width={160} height={48} className="object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
