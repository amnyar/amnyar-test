'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type Props = { images: string[] };

export default function ShowcaseSliderClient({ images }: Props) {
  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16" dir="rtl">
      <button className="sc-nav sc-prev" aria-label="قبلی">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="sc-nav sc-next" aria-label="بعدی">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <Swiper
        className="show-case-slider"
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: '.sc-prev', nextEl: '.sc-next' }}
        loop
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        slidesPerGroup={1}
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          640:  { slidesPerView: 1.6, spaceBetween: 24 },
          768:  { slidesPerView: 2.5, spaceBetween: 28 },
          1024: { slidesPerView: 3.2, spaceBetween: 32 },
          1280: { slidesPerView: 4,   spaceBetween: 32 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={src + i}>
            <div className="group">
              <a href="#" className="block overflow-hidden rounded-[28px]">
                <img
                  src={src}
                  alt={`showcase-${i + 1}`}
                  className="showcase-slide-img transition-transform duration-300 group-hover:scale-[1.12]"
                />
              </a>
              <div className="mt-3 text-white px-1">
                <span className="text-base font-medium">عملکرد عالی</span>
                <h5 className="mt-1 text-lg font-semibold">
                  <a href="#" className="inline-block transition-transform hover:-translate-y-0.5 hover:text-main-600">
                    {i % 3 === 0
                      ? 'توسعه برنامه تلفن همراه'
                      : i % 3 === 1
                      ? 'سیستم محاسبات ابری'
                      : 'طراحی خلاق UI/UX'}
                  </a>
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
