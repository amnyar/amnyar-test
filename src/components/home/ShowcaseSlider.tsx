import fs from 'fs'
import path from 'path'
import ShowcaseSliderClient from './ShowcaseSliderClient'

export default function ShowcaseSlider() {
  const dir = path.join(process.cwd(), 'public', 'assets', 'showcase')
  let items: { src: string; title: string }[] = []
  try {
    items = fs.readdirSync(dir)
      .filter(f => /\.(png|jpe?g|webp|gif)$/i.test(f))
      .sort()
      .map((f) => ({ src: `/assets/showcase/${f}`, title: path.parse(f).name }))
  } catch {}
  return <ShowcaseSliderClient items={items} />
}
