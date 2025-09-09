import 'server-only'
import fs from 'node:fs'
import path from 'node:path'

const exts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'])
const pub = (...p: string[]) => path.join(process.cwd(), 'public', ...p)
const toPosix = (s: string) => s.replace(/\\/g, '/')

export const dirExists = (rel: string) => {
  const abs = pub(rel)
  return fs.existsSync(abs) && fs.statSync(abs).isDirectory()
}

export const firstExistingDir = (candidates: string[]) => {
  for (const d of candidates) if (dirExists(d)) return d
  return null
}

export const listImages = (relDir: string) => {
  const abs = pub(relDir)
  if (!fs.existsSync(abs)) return []
  return fs
    .readdirSync(abs)
    .filter(f => exts.has(path.extname(f).toLowerCase()))
    .sort()
    .map(f => toPosix('/' + relDir + '/' + f))
}

export const pickImage = (relDir: string, keyword?: RegExp) => {
  const abs = pub(relDir)
  if (!fs.existsSync(abs)) return null
  const files = fs.readdirSync(abs)
    .filter(f => exts.has(path.extname(f).toLowerCase()))
    .sort()
  if (!files.length) return null
  if (keyword) {
    const hit = files.find(f => keyword.test(f))
    if (hit) return toPosix('/' + relDir + '/' + hit)
  }
  return toPosix('/' + relDir + '/' + files[0])
}
