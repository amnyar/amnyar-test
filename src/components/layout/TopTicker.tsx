'use client'
import SmartImage from '@/components/ui/SmartImage'

const items = [
  { t: 'راه حل عالی برای موفقیت', i: '/assets/images/icons/chart-icon.svg' },
  { t: 'تعالی در خدمات فناوری اطلاعات متناسب', i: '/assets/images/icons/chart-icon.svg' },
  { t: 'برند خود را بالا ببرید', i: '/assets/images/icons/chart-icon.svg' },
  { t: 'دستیابی به راه‌حل‌های Business Goals', i: '/assets/images/icons/chart-icon.svg' },
  { t: 'نوآوری در هر حضور', i: '/assets/images/icons/chart-icon.svg' },
]

export default function TopTicker() {
  const tape = items.concat(items)
  return (
    <div className="bg-white border-t border-neutral-100">
      <div className="container px-0">
        <div className="ticker">
          <div className="ticker__track">
            {tape.map((it, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 text-[15px]">
                <SmartImage src={it.i} alt="" width={18} height={18} />
                <span className="whitespace-nowrap">{it.t}</span>
              </div>
            ))}
          </div>
          <div className="ticker__fade ticker__fade--l" />
          <div className="ticker__fade ticker__fade--r" />
        </div>
      </div>
    </div>
  )
}
