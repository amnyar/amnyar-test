'use client'
import { useState } from 'react'

type Plan = {
  t: string
  m: number
  y: number
  f: string[]
  spec: { cpu: string; ram: string; storage: string; bw: string; loc: string }
}

export default function ServerPricing() {
  const [yearly, setYearly] = useState(true)
  const plans: Plan[] = [
    {
      t: 'DED‑1',
      m: 3900000,
      y: 3900000 * 10,
      f: ['IP ثابت', 'دسترسی KVM', 'مانیتورینگ ۲۴/۷'],
      spec: { cpu: 'Ryzen 5 5600X', ram: '32GB DDR4', storage: '2×1TB NVMe RAID1', bw: '10TB', loc: 'ایران' },
    },
    {
      t: 'DED‑2',
      m: 6900000,
      y: 6900000 * 10,
      f: ['WAF/Backup', 'پشتیبانی سازمانی', 'SLA 99.9%'],
      spec: { cpu: 'Xeon E‑2288G', ram: '64GB DDR4', storage: '2×2TB NVMe RAID1', bw: '20TB', loc: 'ایران/اروپا' },
    },
    {
      t: 'DED‑Pro',
      m: 12900000,
      y: 12900000 * 10,
      f: ['DDoS Protection', 'OS مدیریت‌شده', 'مانیتورینگ پیشرفته'],
      spec: { cpu: 'EPYC 7302P', ram: '128GB ECC', storage: '2×3.84TB NVMe RAID1', bw: 'نامحدود منصفانه', loc: 'اروپا' },
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-2xl font-extrabold">قیمت‌گذاری سرور اختصاصی</h2>
          <label className="ms-auto inline-flex cursor-pointer items-center gap-2 text-sm">
            ماهانه
            <input type="checkbox" className="peer sr-only" checked={yearly} onChange={() => setYearly(v => !v)} />
            <span className="h-6 w-11 rounded-full bg-slate-300 p-1 transition peer-checked:bg-amn-primary">
              <span className="block h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
            </span>
            سالانه <span className="amn-chip">۲ ماه رایگان</span>
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.t} className={`rounded-2xl border p-6 bg-white ${i === 1 ? 'border-amn-primary shadow-amn-lg' : ''}`}>
              <h3 className="text-lg font-bold">{p.t}</h3>

              <div className="mt-3 text-3xl font-extrabold">
                {(yearly ? p.y : p.m).toLocaleString('fa-IR')} <span className="text-base font-medium">تومان</span>
              </div>

              <ul className="mt-4 space-y-2 text-slate-700">
                <li>CPU: {p.spec.cpu}</li>
                <li>RAM: {p.spec.ram}</li>
                <li>Storage: {p.spec.storage}</li>
                <li>ترافیک: {p.spec.bw}</li>
                <li>موقعیت: {p.spec.loc}</li>
              </ul>

              <ul className="mt-4 space-y-2 text-slate-600">
                {p.f.map(x => <li key={x}>• {x}</li>)}
              </ul>

              <button className="amn-btn-primary mt-6 w-full rounded-lg">درخواست سرویس</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
