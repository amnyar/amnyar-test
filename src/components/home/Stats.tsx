export default function Stats() {
  const s = [
    { v:'99.9٪', l:'آپتایم' },
    { v:'+2,300', l:'پروژه موفق' },
    { v:'8+', l:'سال تجربه' },
    { v:'24/7', l:'پشتیبانی' },
  ]
  return (
    <section className="bg-white py-14">
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {s.map(i=>(
          <div key={i.l} className="rounded-2xl border border-slate-200 p-6">
            <div className="text-3xl font-extrabold text-amn-primary">{i.v}</div>
            <div className="mt-2 text-slate-600">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
