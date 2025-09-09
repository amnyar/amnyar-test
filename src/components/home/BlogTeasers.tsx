import Link from 'next/link'

export default function BlogTeasers() {
  const posts = [
    { t:'۱۵ ابزار برتر سئو فنی در ۱۴۰۴', d:'راهنمای سریع برای تیم‌های کوچک', href:'/blog/seo-tools' },
    { t:'چک‌لیست لانچ فروشگاه', d:'از دامنه تا پرداخت آنلاین', href:'/blog/store-launch' },
  ]
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-2xl bg-white p-10 shadow-amn-lg">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold">از بلاگ امنیار</h3>
            <Link href="/blog" className="amn-btn-outline rounded-full">مشاهده همه</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map(p=>(
              <div key={p.href} className="group rounded-xl border border-slate-200 p-6 hover:border-amn-primary/40">
                <h4 className="text-lg font-bold group-hover:text-amn-primary transition">{p.t}</h4>
                <p className="mt-2 text-slate-600">{p.d}</p>
                <Link href={p.href} className="mt-4 inline-block text-amn-primary">بیشتر بخوانید →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
