'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href?: string; children?: NavChild[] }

const NAV: NavItem[] = [
  { label: 'خانه', children: [
    { label: 'راه حل', href: '/' },
    { label: 'میزبانی وب', href: '/index-2' },
    { label: 'مدیریت وظیفه', href: '/index-3' },
    { label: 'نرم افزار CRM', href: '/index-4' },
    { label: 'فرود برنامه', href: '/index-5' },
  ]},
  { label: 'صفحات', children: [
    { label: 'قیمت‌گذاری', href: '/pricing-plan' },
    { label: 'درباره ما', href: '/about' },
    { label: 'ادغام برنامه', href: '/app-intigration' },
    { label: 'جزئیات ادغام', href: '/intigration-details' },
    { label: 'سیاست حریم خصوصی', href: '/policy-privacy' },
    { label: 'پرسش‌های متداول', href: '/faq' },
    { label: 'جزئیات پروژه', href: '/project-details' },
    { label: 'جزئیات خدمات', href: '/service-details' },
  ]},
  { label: 'فروشگاه', children: [
    { label: 'فروشگاه', href: '/shop' },
    { label: 'جزئیات فروشگاه', href: '/shop-details' },
    { label: 'سبد خرید', href: '/cart' },
    { label: 'پرداخت', href: '/checkout' },
  ]},
  { label: 'وبلاگ', children: [
    { label: 'وبلاگ', href: '/blog' },
    { label: 'جزئیات وبلاگ', href: '/blog-details' },
  ]},
  { label: 'تماس', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <div className="amn-topbar hidden sm:block">
        <div className="container">
          <div className="py-1 text-center">
            <p className="inline-block rounded-full bg-white/10 px-5 py-1 text-sm text-white">ما در حال معرفی یک الگوی UI/UX فوق‌العاده هستیم که برای نتایج عالی طراحی شده است!</p>
          </div>
        </div>
      </div>

      <header className="amn-header">
        <div className={`bg-white ${scrolled ? 'shadow-sm' : ''}`}>
          <div className="container">
            <div className="amn-bar">
              <Link href="/" className="flex items-center">
                <Image src="/assets/images/logo/logo.png" alt="امنیار" width={160} height={40} priority />
              </Link>

              <ul className="amn-nav" role="menubar" aria-label="Main">
                {NAV.map((item) => (
                  <li key={item.label} className="menu-item" role="none">
                    {item.children ? (
                      <>
                        <button className="nav-link" aria-haspopup="true" aria-expanded="false" type="button">
                          {item.label}
                          <span aria-hidden>▾</span>
                        </button>
                        <ul className="submenu" role="menu">
                          {item.children.map((c) => (
                            <li key={c.href} role="none">
                              <Link role="menuitem" href={c.href} className="block">{c.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link href={item.href!} className={`nav-link ${pathname === item.href ? 'text-amn-primary' : ''}`}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <Link href="/register" className="amn-btn-primary hidden sm:inline-flex rounded-full px-5 py-2">اکنون ثبت‌نام کنید</Link>
                <button className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-200 p-2" aria-label="باز کردن منو" onClick={() => setOpen(true)}>
                  <span className="text-xl">☰</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`mobile-panel ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image src="/assets/images/logo/logo.png" alt="امنیار" width={140} height={36} />
          </Link>
          <button aria-label="بستن منو" onClick={() => setOpen(false)} className="text-2xl">×</button>
        </div>
        <nav className="mt-6 space-y-4">
          {NAV.map((item) =>
            item.children ? (
              <details key={item.label} className="rounded-lg border border-slate-200 p-3">
                <summary className="cursor-pointer select-none font-semibold">{item.label}</summary>
                <ul className="mt-2 pe-2 space-y-2">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} onClick={() => setOpen(false)} className="block py-1 text-slate-700">{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link key={item.label} href={item.href!} onClick={() => setOpen(false)} className="block rounded-lg border border-slate-200 px-3 py-2 font-semibold">
                {item.label}
              </Link>
            ),
          )}
          <Link href="/register" onClick={() => setOpen(false)} className="amn-btn-primary w-full justify-center rounded-full">اکنون ثبت‌نام کنید</Link>
        </nav>
      </aside>
    </>
  )
}
