import SmartImage from '@/components/ui/SmartImage'

const items = [
  { t: 'راه‌حل متناسب', d: 'سفارشی‌سازی براساس نیاز واقعی شما.', i: '/assets/images/icons/faq-thumb1.svg' },
  { t: 'فناوری روز', d: 'زیرساخت مدرن و امن.', i: '/assets/images/icons/faq-thumb2.svg' },
  { t: 'کشف و تحلیل', d: 'داده‌محور و پایش مداوم.', i: '/assets/images/icons/faq-thumb3.svg' },
  { t: 'استقرار و پشتیبانی', d: 'پشتیبانی واقعی و SLA.', i: '/assets/images/icons/faq-thumb4.svg' },
]

export default function TechSolution() {
  return (
    <section className="py-16 bg-indigo-50/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-white text-amn-primary px-3 py-1 text-xs font-bold">راه‌حل فنی</span>
            <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">پلتفرم کامل برای توانمندسازی شما</h3>
            <p className="mt-3 text-slate-600">ترکیبی از معماری بهینه، امنیت و تجربه کاربری تمیز.</p>
            <ul className="mt-6 grid grid-cols-1 gap-4">
              {items.map((it) => (
                <li key={it.t} className="rounded-xl border bg-white p-4 hover:border-amn-primary transition">
                  <div className="flex items-start gap-3">
                    <SmartImage src={it.i} alt="" width={28} height={28} />
                    <div>
                      <h6 className="font-semibold mb-1">{it.t}</h6>
                      <p className="text-sm text-slate-600">{it.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[420px]">
            <SmartImage src="/assets/images/thumbs/faq-thumb1.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
