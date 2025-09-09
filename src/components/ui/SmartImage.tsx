import Image, { ImageProps } from 'next/image'
export default function SmartImage(props: ImageProps) {
  const { priority, loading, ...rest } = props
  return <Image loading={priority ? undefined : (loading ?? 'lazy')} {...rest} />
}
