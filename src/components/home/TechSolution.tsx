'use client'

import { useState } from 'react'
import SmartImage from '@/components/ui/SmartImage'

const items = [
  { t: 'فناوری برش', d: 'زیرساخت مدرن و امن.', img: '/assets/images/thumbs/faq-thumb1.png' },
  { t: 'راه حل متناسب', d: 'سفارشی‌سازی بر اساس نیاز واقعی شما.', img: '/assets/images/thumbs/faq-thumb2.png' },
  { t: 'کشف و تجزیه و تحلیل', d: 'تصمیم‌های داده‌محور و پایش مداوم.', img: '/assets/images/thumbs/faq-thumb3.png' },
  { t: 'استقرار و پشتیبانی', d: 'پشتیبانی واقعی و SLA.', img: '/assets/images/thumbs/faq-thumb4.png' },
]

export default function TechSolution() {
  const [active, setActive] = useState(0)
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-white text-amn-primary px-3 py-1 text-xs font-bold">راه حل فنی</span>
            <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">پلتفرم کامل برای توانمندسازی شما</h3>
            <p className="mt-3 text-slate-600">ترکیبی از معماری بهینه، امنیت و تجربه کاربری تمیز.</p>

            <ul className="mt-6 space-y-3">
              {items.map((it, i) => (
                <li key={it.t}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`w-full text-start rounded-xl border p-4 transition ${active === i ? 'border-amn-primary bg-indigo-50/50' : 'hover:border-amn-primary/60'}`}
                  >
                    <h6 className="font-semibold mb-1">{it.t}</h6>
                    <p className="text-sm text-slate-600">{it.d}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative h-[420px] rounded-2xl overflow-hidden bg-white p-3 shadow">
              <SmartImage
                key={items[active].img}
                src={items[active].img}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
                priority
              />
            </div>
            <SmartImage src="/assets/images/thumbs/faq-img-1.png" alt="" width={110} height={110} className="absolute -top-3 -right-3" />
            <SmartImage src="/assets/images/thumbs/faq-img-2.png" alt="" width={120} height={120} className="absolute bottom-4 right-4" />
            <SmartImage src="/assets/images/thumbs/faq-img-3.png" alt="" width={120} height={120} className="absolute bottom-0 -left-4" />
          </div>
        </div>
      </div>
    </section>
  )
}
