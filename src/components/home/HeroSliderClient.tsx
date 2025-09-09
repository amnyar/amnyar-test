'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSliderClient({ images }: { images: string[] }) {
  const slides = [
    { t: 'هاست لینوکس حرفه‌ای', d: 'سرعت بالا، امنیت، بکاپ روزانه و پشتیبانی واقعی', a1: { href: '/hosting/linux-pro', label: 'مشاهده پلن‌ها' }, a2: { href: '/contact', label: 'مشاوره رایگان' } },
    { t: 'طراحی سایت اختصاصی', d: 'ریسپانسیو، سئو‌محور و آماده فروش', a1: { href: '/web-design', label: 'شروع پروژه' }, a2: { href: '/projects', label: 'نمونه‌کارها' } },
    { t: 'خدمات شبکه سازمانی', d: 'راه‌اندازی، مانیتورینگ و امن‌سازی شبکه', a1: { href: '/network', label: 'درخواست سرویس' }, a2: { href: '/contact', label: 'تماس سریع' } },
  ]
  const hasPics = images && images.length > 0

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white" />
      <div className="container py-10 md:py-16" dir="rtl">
        <Swiper
          className="hero-swiper"
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={hasPics}
          speed={600}
        >
          {(hasPics ? images.slice(0, 3) : [null, null, null]).map((img, i) => (
            <SwiperSlide key={`hero-${i}`}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">{slides[i]?.t}</h1>
                  <p className="mt-4 text-slate-600">{slides[i]?.d}</p>
                  <div className="mt-8 flex items-center gap-3">
                    <Link href={slides[i]!.a1!.href} className="amn-btn-primary">{slides[i]!.a1!.label}</Link>
                    <Link href={slides[i]!.a2!.href} className="amn-btn-outline">{slides[i]!.a2!.label}</Link>
                  </div>
                </div>
                <div className="relative h-64 md:h-[420px]">
                  {img ? (
                    <Image src={img} alt="slide" fill priority={i===0} sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
                  ) : (
                    <div className="h-full w-full rounded-2xl bg-white/0" />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
