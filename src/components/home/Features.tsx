export default function Features() {
  const data = [
    { t: 'طراحی سایت اختصاصی', d: 'ریسپانسیو، سئو محور و تمیز برای رشد.', i: '🖥️' },
    { t: 'هاست لینوکس حرفه‌ای', d: 'سرعت بالا، NVMe، بکاپ روزانه و امنیت.', i: '🚀' },
    { t: 'خدمات شبکه سازمانی', d: 'راه‌اندازی، مانیتورینگ و امن‌سازی.', i: '🛡️' },
  ]
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {data.map((f) => (
            <div key={f.t} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl">{f.i}</div>
              <h3 className="mt-4 text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-slate-600">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
