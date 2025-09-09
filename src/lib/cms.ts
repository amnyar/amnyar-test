const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337'
const CMS_TOKEN = process.env.STRAPI_TOKEN || ''

export async function cmsFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${CMS_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(CMS_TOKEN ? { Authorization: `Bearer ${CMS_TOKEN}` } : {}),
    },
    next: { revalidate: 60 },
    ...(init || {}),
  })
  if (!res.ok) throw new Error('CMS error')
  return res.json() as Promise<T>
}
