import SmartImage from '@/components/ui/SmartImage'

export default function AboutIntro() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <SmartImage
              src="/assets/images/thumbs/banner-img.png"
              alt=""
              width={720}
              height={520}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>

          <div>
            <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-bold">درباره ما</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-[1.2]">راه‌حل جامع برای رشد و افزایش کارآیی</h2>
            <p className="mt-4 text-slate-600">در تجارت رقابتی امروز، تقاضا برای راه‌حل‌های کارآمد و مقرون‌به‌صرفه فناوری اطلاعات بسیار مهم است.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="rounded-xl border p-4 hover:border-amn-primary transition">
                <div className="flex items-start gap-3">
                  <SmartImage src="/assets/images/icons/about-icon1.svg" alt="" width={28} height={28} />
                  <div>
                    <h6 className="font-semibold mb-1">نوآوری در هسته</h6>
                    <p className="text-sm text-slate-600">حل مسئله خلاقانه و سریع.</p>
                  </div>
                </div>
              </li>
              <li className="rounded-xl border p-4 hover:border-amn-primary transition">
                <div className="flex items-start gap-3">
                  <SmartImage src="/assets/images/icons/about-icon2.svg" alt="" width={28} height={28} />
                  <div>
                    <h6 className="font-semibold mb-1">پیچیدگی ساده</h6>
                    <p className="text-sm text-slate-600">معماری شفاف و مقیاس‌پذیر.</p>
                  </div>
                </div>
              </li>
              <li className="rounded-xl border p-4 hover:border-amn-primary transition">
                <div className="flex items-start gap-3">
                  <SmartImage src="/assets/images/icons/about-icon3.svg" alt="" width={28} height={28} />
                  <div>
                    <h6 className="font-semibold mb-1">توانمندسازی رشد</h6>
                    <p className="text-sm text-slate-600">تمرکز بر نتایج قابل‌سنجش.</p>
                  </div>
                </div>
              </li>
              <li className="rounded-xl border p-4 hover:border-amn-primary transition">
                <div className="flex items-start gap-3">
                  <SmartImage src="/assets/images/icons/about-icon1.svg" alt="" width={28} height={28} />
                  <div>
                    <h6 className="font-semibold mb-1">بهینه‌سازی سئو</h6>
                    <p className="text-sm text-slate-600">ساختار محتوا و Core Web Vitals.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
