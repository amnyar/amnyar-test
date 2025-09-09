export default function Services() {
  const data = [
    { t: 'هاست اشتراکی', d: 'پلن‌های اقتصادی تا حرفه‌ای' },
    { t: 'سرور اختصاصی/مجازی', d: 'کانفیگ، مانیتورینگ، امنیت' },
    { t: 'طراحی فروشگاه', d: 'آماده پرداخت و حمل‌ونقل' },
    { t: 'سئو تکنیکال', d: 'Core Web Vitals، اسکیما، ساختار' },
    { t: 'پشتیبانی سایت', d: 'نگهداری، مانیتورینگ، SLA' },
    { t: 'زیرساخت شبکه', d: 'LAN/WAN، فایروال، VPN' },
  ]
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-2xl font-extrabold">آنچه ارائه می‌دهیم</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {data.map((s) => (
            <div key={s.t} className="rounded-2xl border border-slate-200 p-6 hover:border-amn-primary/40 shadow-sm hover:shadow-amn-lg transition">
              <h3 className="font-bold">{s.t}</h3>
              <p className="mt-2 text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
