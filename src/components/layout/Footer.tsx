import Link from 'next/link'
import SmartImage from '@/components/ui/SmartImage'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center gap-8 border-b border-neutral-700 pb-10">
          <div className="flex items-center gap-3 max-w-md w-full">
            <h3 className="text-4xl font-bold flex items-center gap-3">
              <SmartImage alt="" src="/assets/images/icons/arrow-up-main.svg" width={28} height={28} />
              88٪
            </h3>
            <p className="text-neutral-300">متوسط رشد درآمد برای هر مشتری موفق</p>
          </div>
          <div className="ms-auto hidden md:block">
            <SmartImage alt="" src="/assets/images/thumbs/footer-img.png" width={260} height={160} />
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block mb-6">
                <SmartImage alt="امنیار" src="/assets/images/logo/logo-white.png" width={160} height={40} />
              </Link>
              <form className="flex flex-col md:flex-row gap-3">
                <label className="sr-only" htmlFor="footer-email">ایمیل</label>
                <input id="footer-email" type="email" required placeholder="آدرس ایمیل" className="h-12 w-full rounded-lg bg-white/10 px-4 text-white placeholder-white/60 outline-none ring-1 ring-neutral-700 focus:ring-amn-primary" />
                <button className="amn-btn-primary rounded-lg px-5">ثبت‌نام</button>
              </form>
              <p className="text-neutral-400 text-sm mt-4">با عضویت، با <Link className="underline hover:text-amn-primary" href="#">سیاست حریم خصوصی</Link> موافقم.</p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">حساب من</h5>
              <ul className="space-y-2 text-neutral-300">
                <li><Link className="hover:text-white" href="#">پشتیبانی انجمن</Link></li>
                <li><Link className="hover:text-white" href="#">راهنما و متداول</Link></li>
                <li><Link className="hover:text-white" href="/contact">با ما تماس بگیرید</Link></li>
                <li><Link className="hover:text-white" href="#">قیمت‌گذاری و پلن‌ها</Link></li>
                <li><Link className="hover:text-white" href="#">سیاست کوکی‌ها</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">خدمات</h5>
              <ul className="space-y-2 text-neutral-300">
                <li><Link className="hover:text-white" href="#">مشاوره فناوری اطلاعات</Link></li>
                <li><Link className="hover:text-white" href="#">خدمات ابری</Link></li>
                <li><Link className="hover:text-white" href="#">یادگیری ماشین / AI</Link></li>
                <li><Link className="hover:text-white" href="#">امنیت داده‌ها</Link></li>
                <li><Link className="hover:text-white" href="#">توسعه نرم‌افزار</Link></li>
                <li><Link className="hover:text-white" href="#">امنیت سایبری</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">محل و تماس</h5>
              <div className="space-y-3 text-neutral-300">
                <p>اصفهان، دروازه دولت، طبقه ۳</p>
                <p><Link className="hover:text-white" href="mailto:support@amnyar.com">support@amnyar.com</Link></p>
                <p><Link className="hover:text-white" href="tel:+983134617093">03134617093</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dashed border-neutral-700 py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-neutral-300">© 1404 <Link href="#" className="hover:underline hover:text-white">فرهام اقدسی</Link> – کلیه حقوق محفوظ است.</p>
            <ul className="flex items-center gap-4 text-neutral-300">
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
