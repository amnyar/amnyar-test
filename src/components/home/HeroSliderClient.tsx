'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
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
  return (
    <Swiper
      className="hero-swiper"
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      dir="rtl"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <section className="banner tw-py-80-px overflow-hidden relative">
            <div className="container max-w-1400-px">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                <div className="order-2 lg:order-1">
                  <h1 className="fw-light tw-leading-104">{content.title}</h1>
                  <p className="hidden md:block tw-mt-3 tw-text-lg max-w-500-px text-neutral-500">{content.description}</p>
                  <div className="tw-mt-11 flex items-center gap-6 justify-center lg:justify-start">
                    <Link href={content.buttonLink} className="btn-main">{content.buttonText}</Link>
                    <div className="hidden md:flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <Image alt="" src="/assets/images/thumbs/client-img1.png" width={36} height={36} className="rounded-full border border-white avatar" />
                        <Image alt="" src="/assets/images/thumbs/client-img2.png" width={36} height={36} className="rounded-full border border-white avatar" />
                        <Image alt="" src="/assets/images/thumbs/client-img3.png" width={36} height={36} className="rounded-full border border-white avatar" />
                      </div>
                      <div className="text-sm text-slate-600">+۲۰.۳m <span className="text-slate-400">بررسی مشتری</span></div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative tw-ps-98-px">
                    <div className="absolute -top-6 end-8 w-[520px] h-[520px] -z-0 hidden md:block">
                      <Image alt="" src="/assets/images/shapes/sqaure_shape.png" fill sizes="520px" className="object-contain floating-element-1" priority />
                    </div>

                    <div className="relative z-10 rounded-[32px] overflow-hidden">
                      <Image alt="" src={src} width={640} height={760} className="w-full h-auto" priority={i === 0} />
                      <div className="hidden md:block trust-badge absolute -top-9 start-10 z-20">
                        <div className="inline-flex items-center gap-2 bg-green text-white tw-py-05 tw-px-3 rounded-full"><span className="fw-bold tw-text-sm">4.9</span></div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            <Image alt="" src="/assets/images/icons/star.svg" width={16} height={16} />
                            <Image alt="" src="/assets/images/icons/star.svg" width={16} height={16} />
                            <Image alt="" src="/assets/images/icons/star.svg" width={16} height={16} />
                            <Image alt="" src="/assets/images/icons/star.svg" width={16} height={16} />
                            <Image alt="" src="/assets/images/icons/star.svg" width={16} height={16} />
                          </div>
                          <span className="fw-semibold">خیلی اعتماد</span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block exp-badge absolute -bottom-8 -start-8 z-20">
                      <div className="text-center">
                        <div className="text-white text-5xl fw-semibold">+8</div>
                        <div className="text-white/90 tw-mt-2">تجربه سالها</div>
                      </div>
                    </div>

                    <div className="hidden md:flex revenue-card items-center gap-4 absolute -bottom-6 -end-12 z-20">
                      <div>
                        <div className="text-neutral-500 tw-text-sm tw-mb-1">درآمد</div>
                        <div className="fw-semibold">۴۸۲۰.۰۰ تومان</div>
                      </div>
                      <div>
                        <Image alt="" src="/assets/images/thumbs/revenue-chart.png" width={100} height={70} />
                      </div>
                    </div>

                    <div className="hidden md:block absolute -bottom-2 -end-[180px] z-10">
                      <Image alt="" src="/assets/images/shapes/revenue-shape.png" width={140} height={100} className="rev-splash animate__wobble__two" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:hidden mt-6 flex flex-col items-center gap-4">
                <p className="text-center text-neutral-500 tw-text-base">{content.description}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
