'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import SmartImage from '@/components/ui/SmartImage'

export default function ShowcaseSliderClient({ items }: { items: { src: string; title: string }[] }) {
  const data = items.length ? items : [
    { src: '/assets/images/thumbs/show-case-img1.png', title: 'توسعه برنامه تلفن همراه' },
    { src: '/assets/images/thumbs/show-case-img2.png', title: 'سیستم محاسبات ابری' },
    { src: '/assets/images/thumbs/show-case-img3.png', title: 'طراحی خلاق UI/UX' },
    { src: '/assets/images/thumbs/show-case-img4.png', title: 'وب‌اپلیکیشن سازمانی' },
  ]

  return (
    <section className="py-16 bg-indigo-900">
      <div className="container">
        <div className="text-center text-white mb-10">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium">ویترین کار</span>
          <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">راه‌حل جامع فناوری اطلاعات برای رشد و افزایش کارآیی</h3>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{ prevEl: '.sc-prev', nextEl: '.sc-next' }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{ 768: { slidesPerView: 2.1 }, 1024: { slidesPerView: 3.1 } }}
          >
            {data.map((it, i) => (
              <SwiperSlide key={i}>
                <div className="group">
                  <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden">
                    <SmartImage src={it.src} alt="" fill className="object-cover group-hover:scale-105 transition duration-300" sizes="(max-width: 768px) 90vw, 33vw" />
                  </div>
                  <div className="mt-3 text-white">
                    <span className="text-sm opacity-80">عملکرد عالی</span>
                    <h5 className="mt-1 font-semibold line-clamp-1">{it.title}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="sc-btn sc-prev" aria-label="قبلی">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 19.5L8 12l7.5-7.5l1.5 1.5L11 12l6 6z"/></svg>
          </button>
          <button className="sc-btn sc-next" aria-label="بعدی">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 4.5L16 12l-7.5 7.5L7 18l6-6l-6-6z"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
