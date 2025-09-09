'use client'
import { useState } from 'react'

export default function Pricing() {
  const [yearly, setYearly] = useState(true)
  const plans = [
    { t:'اقتصادی', m: 99000, y: 990000, f: ['۱GB فضا','۲۰GB ترافیک','SSL رایگان'] },
    { t:'حرفه‌ای', m: 199000, y: 1990000, f: ['۱۰GB فضا','۲۰۰GB ترافیک','پشتیبانی ۲۴/۷'] },
    { t:'سازمانی', m: 499000, y: 4990000, f: ['NVMe','WAF/Backup','SLA سازمانی'] },
  ]
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-2xl font-extrabold">قیمت‌گذاری هاست</h2>
          <label className="ms-auto inline-flex cursor-pointer items-center gap-2 text-sm">
            ماهانه
            <input type="checkbox" className="peer sr-only" checked={yearly} onChange={()=>setYearly(v=>!v)} />
            <span className="h-6 w-11 rounded-full bg-slate-300 p-1 transition peer-checked:bg-amn-primary">
              <span className="block h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></span>
            </span>
            سالانه <span className="amn-chip">۲ ماه رایگان</span>
          </label>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p,i)=>(
            <div key={p.t} className={`rounded-2xl border p-6 ${i===1?'border-amn-primary shadow-amn-lg':''}`}>
              <h3 className="text-lg font-bold">{p.t}</h3>
              <div className="mt-3 text-3xl font-extrabold">
                { (yearly ? p.y : p.m).toLocaleString('fa-IR') } <span className="text-base font-medium">تومان</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600">
                {p.f.map(x=> <li key={x}>• {x}</li>)}
              </ul>
              <button className="amn-btn-primary mt-6 w-full rounded-lg">سفارش</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
