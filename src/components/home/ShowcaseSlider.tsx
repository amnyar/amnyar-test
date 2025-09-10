import fs from 'fs';
import path from 'path';
import ShowcaseSliderClient from './ShowcaseSliderClient';

function getShowcaseImages(): string[] {
  const dir = path.join(process.cwd(), 'public', 'assets', 'showcase');
  try {
    const files = fs
      .readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
      .map((f) => `/assets/showcase/${f}`);
    if (files.length) return files;
  } catch {}
  return [
    '/assets/images/thumbs/show-case-img1.png',
    '/assets/images/thumbs/show-case-img2.png',
    '/assets/images/thumbs/show-case-img3.png',
    '/assets/images/thumbs/show-case-img4.png',
    '/assets/images/thumbs/show-case-img2.png',
    '/assets/images/thumbs/show-case-img3.png',
  ];
}

export default function ShowcaseSlider() {
  const images = getShowcaseImages();

  return (
    <section className="showcase-section overflow-hidden">
      <div className="max-w-[602px] mx-auto text-center mb-10 px-4">
        <span className="showcase-badge">ویترین کار</span>
        <h3 className="showcase-title leading-[1.15] font-light text-3xl md:text-4xl">
          <span className="font-medium">
            <span className="font-semibold">راه‌حل جامع فناوری اطلاعات</span>{' '}
            برای رشد <span className="font-semibold">و افزایش کارآیی</span>
          </span>
        </h3>
      </div>
      <div className="full-bleed relative">
        <ShowcaseSliderClient images={images} />
      </div>
    </section>
  );
}
