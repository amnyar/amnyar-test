export default function Testimonials() {
  const data = [
    { n:'وب‌سایت جونسون', r:'سرعت و پایداری هاست امنیار واقعاً عالیه.' },
    { n:'جیمز اندرسون', r:'تیم طراحی، سایت ما رو از صفر تا فروش آماده کرد.' },
    { n:'جان دو', r:'پشتیبانی ۲۴/۷ دقیقاً همون چیزیه که لازم داشتیم.' },
  ]
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-2xl font-extrabold">نظر مشتریان</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {data.map((t)=>(
            <div key={t.n} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="leading-7 text-slate-700">“{t.r}”</p>
              <div className="mt-4 text-sm text-slate-500">{t.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
