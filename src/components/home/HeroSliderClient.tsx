'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'

type HeroContent = {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function HeroSliderClient({
  images,
  content,
}: {
  images: string[]
  content: HeroContent
}) {
  const [tab, setTab] = useState<'daily' | 'weekly' | 'monthly'>('daily')

  return (
    <Swiper
      className="hero-swiper"
      dir="rtl"
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      speed={700}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={`${src}-${i}`}>
          <section className="relative overflow-hidden banner section-bg-three py-12 md:py-20">
            <Image
              alt=""
              src="/assets/images/shapes/sqaure_shape.png"
              width={500}
              height={500}
              className="hero-square-shape"
              priority={i === 0}
            />

            <div className="container">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h1 className="hero-title font-light">
                    {content.title}
                  </h1>
                  <p className="mt-6 max-w-[520px] text-slate-600">
                    {content.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <Link
                      href={content.buttonLink}
                      className="rounded-full bg-[#0d6efd] px-8 py-3 font-semibold text-white transition hover:opacity-90"
                    >
                      {content.buttonText}
                    </Link>

                    <div className="hero-cta-stats hidden items-center gap-3 sm:flex">
                      <div className="flex -space-x-2 rtl:space-x-reverse">
                        <Image alt="" src="/assets/images/thumbs/client-img1.png" width={36} height={36} className="avatar rounded-full" />
                        <Image alt="" src="/assets/images/thumbs/client-img2.png" width={36} height={36} className="avatar rounded-full ring-2 ring-white" />
                        <Image alt="" src="/assets/images/thumbs/client-img3.png" width={36} height={36} className="avatar rounded-full ring-2 ring-white" />
                      </div>
                      <span className="count">+2.3m</span>
                      <span className="text-sm text-slate-500">5000+ بررسی مشتری</span>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative ps-16 md:ps-24 pb-2">
                    <Image alt="" src={src} width={700} height={700} className="h-auto w-full" priority={i === 0} />

                    <div className="trust-badge hidden md:block">
                      <div className="absolute -top-3 -end-3 rounded-full bg-[#28a745] px-3 py-0.5 text-xs font-bold text-white">4.9</div>
                      <Image alt="" src="/assets/images/icons/ratings.svg" width={160} height={20} />
                      <div className="mt-3 flex max-w-[154px] items-center justify-between">
                        <span className="text-lg font-semibold text-slate-800">خلبان اعتماد</span>
                        <Image alt="" src="/assets/images/icons/verified-icon.svg" width={20} height={20} />
                      </div>
                    </div>

                    <div className="exp-badge hidden md:block">
                      <div className="text-3xl font-bold text-white">8+</div>
                      <div className="text-white">تجربه سالها</div>
                    </div>

                    <div className="revenue-card hidden items-center gap-4 border border-white bg-white/70 md:flex">
                      <Image
                        alt=""
                        src="/assets/images/shapes/revenue-shape.png"
                        width={56}
                        height={56}
                        className="rev-splash"
                      />
                      <div>
                        <div className={tab === 'daily' ? 'block' : 'hidden'}>
                          <span className="mb-1 block text-xs uppercase text-slate-500">درآمد</span>
                          <div className="mb-2 text-xl font-semibold">4820.00 تومان</div>
                        </div>
                        <div className={tab === 'weekly' ? 'block' : 'hidden'}>
                          <span className="mb-1 block text-xs uppercase text-slate-500">درآمد</span>
                          <div className="mb-2 text-xl font-semibold">2445.00 تومان</div>
                        </div>
                        <div className={tab === 'monthly' ? 'block' : 'hidden'}>
                          <span className="mb-1 block text-xs uppercase text-slate-500">درآمد</span>
                          <div className="mb-2 text-xl font-semibold">8221.00 تومان</div>
                        </div>
                        <div className="mt-2 flex items-center gap-4 text-sm text-slate-600">
                          <button onClick={() => setTab('daily')} className={tab === 'daily' ? 'font-semibold text-[#0d6efd]' : ''}>روزمره</button>
                          <button onClick={() => setTab('weekly')} className={tab === 'weekly' ? 'font-semibold text-[#0d6efd]' : ''}>هفتگی</button>
                          <button onClick={() => setTab('monthly')} className={tab === 'monthly' ? 'font-semibold text-[#0d6efd]' : ''}>ماهانه</button>
                        </div>
                      </div>
                      <Image alt="" src="/assets/images/thumbs/revenue-chart.png" width={92} height={54} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
