import Link from 'next/link'
import SmartImage from '@/components/ui/SmartImage'

export default function Footer() {
  return (
    <footer className="bg-black text-white relative z-10 mt-auto pt-16 overflow-hidden">
      <div className="container">
        <div className="flex items-start gap-10">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-12 pb-12 border-b border-neutral-700">
              <div className="flex items-center gap-3 max-w-xl">
                <h3 className="text-4xl md:text-5xl font-semibold inline-flex items-center gap-3">
                  <SmartImage alt="" src="/assets/images/icons/arrow-up-main.svg" width={28} height={28} />
                  88٪
                </h3>
                <p className="text-neutral-300 max-w-[194px]">
                  متوسط رشد درآمد برای هر مشتری موفق
                </p>
              </div>

              <div className="flex items-center gap-3 max-w-xl">
                <h3 className="text-4xl md:text-5xl font-semibold">1.3 متر</h3>
                <p className="text-neutral-300 max-w-[194px]">
                  متوسط رشد درآمد برای هر مشتری موفق
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-6">
              <ul className="flex items-center gap-6 flex-wrap">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-amn-primary text-white grid place-content-center text-[10px]">✓</span>
                  <p className="text-white font-medium">گزینه‌های مختلف تجزیه و تحلیل.</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-amn-primary text-white grid place-content-center text-[10px]">✓</span>
                  <p className="text-white font-medium">بار صفحه (زمان، اندازه، تعداد درخواست‌ها).</p>
                </li>
              </ul>

              <div className="w-full md:w-auto md:ms-auto flex items-center md:justify-center justify-between gap-2 md:gap-4">
                <Link href="https://play.google.com/store/apps" className="inline-block hover:-translate-y-0.5 transition">
                  <SmartImage alt="Google Play" src="/assets/images/icons/store1.png" width={180} height={56} />
                </Link>
                <Link href="https://www.apple.com/app-store" className="inline-block hover:-translate-y-0.5 transition">
                  <SmartImage alt="App Store" src="/assets/images/icons/store2.png" width={180} height={56} />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0 footer-gradient">
            <SmartImage alt="" src="/assets/images/thumbs/footer-img.png" width={320} height={220} />
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-start-1 lg:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <SmartImage alt="امنیار" src="/assets/images/logo/logo-white.png" width={160} height={40} />
              </Link>

              <form className="flex flex-col md:flex-row gap-3 form-submit">
                <div className="relative flex-1">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    className="h-14 w-full rounded-lg bg-white/10 ps-12 pe-6 border border-neutral-700 focus:outline-none focus:border-amn-primary text-white placeholder:text-neutral-300"
                    placeholder="آدرس ایمیل"
                  />
                  <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 start-3 text-white/90">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 7l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <button className="amn-btn amn-btn-primary h-14 rounded-lg px-6 group flex-shrink-0">
                  <span className="relative z-10">ثبت ‌نام</span>
                  <span className="ms-2 inline-flex items-center text-white group-hover:translate-x-0.5 transition">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </form>

              <p className="text-neutral-400 text-sm mt-3">
                با مشترک‌شدن، شما با{' '}
                <Link className="underline hover:text-amn-primary" href="#">
                  سیاست حریم خصوصی
                </Link>{' '}
                موافقم.
              </p>
            </div>

            <div className="lg:col-start-6 lg:col-span-2">
              <h5 className="font-semibold mb-4">حساب من</h5>
              <ul className="space-y-2 text-neutral-300">
                <li><Link className="hover:text-white" href="#">پشتیبانی انجمن</Link></li>
                <li><Link className="hover:text-white" href="#">راهنما و متداول</Link></li>
                <li><Link className="hover:text-white" href="/contact">با ما تماس بگیرید</Link></li>
                <li><Link className="hover:text-white" href="#">قیمت‌گذاری و پلن‌ها</Link></li>
                <li><Link className="hover:text-white" href="#">سیاست کوکی‌ها</Link></li>
              </ul>
            </div>

            <div className="lg:col-start-8 lg:col-span-2">
              <h5 className="font-semibold mb-4">خدمات</h5>
              <ul className="space-y-2 text-neutral-300">
                <li><Link className="hover:text-white" href="#">مشاوره فناوری اطلاعات</Link></li>
                <li><Link className="hover:text-white" href="#">خدمات ابری</Link></li>
                <li><Link className="hover:text-white" href="#">یادگیری ماشین / AI</Link></li>
                <li><Link className="hover:text-white" href="#">امنیت داده‌ها</Link></li>
                <li><Link className="hover:text-white" href="#">توسعه وب و برنامه‌ها</Link></li>
                <li><Link className="hover:text-white" href="#">امنیت سایبری</Link></li>
              </ul>
            </div>

            <div className="lg:col-start-10 lg:col-span-3">
              <h5 className="font-semibold mb-4">محل و تماس</h5>
              <div className="space-y-3 text-neutral-300">
                <p>اصفهان ، دروازه دولت ساختمان ارگ ، طبقه ۳</p>
                <p><Link className="hover:text-white" href="mailto:support@amnyar.com">support@amnyar.com</Link></p>
                <p className="text-lg"><Link className="hover:text-white" href="tel:+983134617093">03134617093 - 09138000987</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dashed border-neutral-700 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 md:justify-between text-center md:text-start">
            <p className="text-neutral-300">
              © 1404 <Link href="#" className="hover:text-white">فرهام اقدسی</Link> – کلیه حقوق محفوظ است.
            </p>
            <ul className="flex items-center justify-center gap-4 text-neutral-300">
              <li><Link className="hover:text-white" href="https://www.facebook.com">فیسبوک</Link></li>
              <li><Link className="hover:text-white" href="https://www.twitter.com">توییتر</Link></li>
              <li><Link className="hover:text-white" href="https://www.linkedin.com">لینکدین</Link></li>
              <li><Link className="hover:text-white" href="https://www.instagram.com">اینستاگرام</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}