export type NavChild = { label: string; href: string; image?: string };
export type NavItem = { id: string; label: string; href?: string; type?: 'dropdown' | 'mega'; children?: NavChild[] };

export const WEB_DESIGN_GRID: NavChild[] = [
  { label: 'طراحی سایت شرکتی', href: '/web-design/corporate', image: '/images/webtypes/corporate.png' },
  { label: 'طراحی سایت شخصی', href: '/web-design/personal', image: '/images/webtypes/personal.png' },
  { label: 'طراحی سایت فروشگاهی', href: '/web-design/shop', image: '/images/webtypes/shop.png' },
  { label: 'طراحی سایت خبری', href: '/web-design/news', image: '/images/webtypes/news.png' },
  { label: 'طراحی سایت جامعه‌مجازی', href: '/web-design/community', image: '/images/webtypes/community.png' },
  { label: 'طراحی سایت انجمن', href: '/web-design/forum', image: '/images/webtypes/forum.png' },
  { label: 'طراحی سایت تبلیغاتی', href: '/web-design/advertising', image: '/images/webtypes/ads.png' },
  { label: 'طراحی سایت کالا/دیجیتال', href: '/web-design/digital', image: '/images/webtypes/digital.png' },
];

export const NETWORK_SERVICES: NavChild[] = [
  { label: 'نصب و راه‌اندازی انواع شبکه', href: '/network/setup' },
  { label: 'کانفیگ انواع روتر و فایروال', href: '/network/router-firewall' },
  { label: 'مدیریت شبکه و فایل‌ها', href: '/network/management' },
  { label: 'مدیریت اینترنت کاربران', href: '/network/internet-control' },
  { label: 'مانیتورینگ کاربران', href: '/network/user-monitoring' },
  { label: 'نرم‌افزار همراه', href: '/network/mobile-app' },
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'خانه', href: '/' },
  { id: 'web', label: 'طراحی وب‌سایت', type: 'mega', children: WEB_DESIGN_GRID },
  { id: 'host', label: 'هاست', type: 'dropdown', children: [
      { label: 'هاست حرفه‌ای لینوکس', href: '/hosting/linux-pro' },
      { label: 'هاست وردپرس', href: '/hosting/wordpress' },
      { label: 'هاست دانلود', href: '/hosting/download' },
      { label: 'نمایندگی هاست', href: '/hosting/reseller' },
    ] },
  { id: 'dedicated', label: 'سرور اختصاصی', type: 'dropdown', children: [
      { label: 'سرور اختصاصی ایران', href: '/dedicated/iran' },
      { label: 'سرور اختصاصی خارج', href: '/dedicated/abroad' },
    ] },
  { id: 'network', label: 'خدمات شبکه', type: 'mega', children: NETWORK_SERVICES },
  { id: 'seo', label: 'بهینه‌سازی سایت', type: 'dropdown', children: [
      { label: 'سئو', href: '/seo' },
      { label: 'بهینه‌سازی سرعت', href: '/performance' },
    ] },
  { id: 'ads', label: 'تبلیغات', type: 'dropdown', children: [
      { label: 'تبلیغات در گوگل ارزان', href: '/ads/google' },
      { label: 'کمپین شبکه‌های اجتماعی', href: '/ads/social' },
    ] },
  { id: 'client', label: 'ناحیه کاربری', href: '/client-area' },
  { id: 'contact', label: 'ارتباط با ما', type: 'dropdown', children: [
      { label: 'تماس با ما', href: '/contact' },
    ] },
  { id: 'about', label: 'درباره ما', href: '/about' },
];
