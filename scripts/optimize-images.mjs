import sharp from 'sharp';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const imagesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

const jobs = [
  { src: 'copa.jpeg', out: 'copa.webp', width: 860 },
  { src: 'flebotomista.jpeg', out: 'flebotomista.webp', width: 860 },
  { src: 'limpeza-hosp.jpeg', out: 'limpeza-hosp.webp', width: 860 },
  { src: 'galeria1.jpeg', out: 'galeria1.webp', width: 1100 },
  { src: 'galeria2.jpeg', out: 'galeria2.webp', width: 1100 },
  { src: 'galeria3.jpeg', out: 'galeria3.webp', width: 1100 },
  { src: 'galeria4.jpeg', out: 'galeria4.webp', width: 1100 },
];

for (const { src, out, width } of jobs) {
  const srcPath = join(imagesDir, src);
  const outPath = join(imagesDir, out);
  const meta = await sharp(srcPath).metadata();
  await sharp(srcPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outPath);
  const inKb = (statSync(srcPath).size / 1024).toFixed(0);
  const outKb = (statSync(outPath).size / 1024).toFixed(0);
  console.log(`${src.padEnd(20)} ${meta.width}x${meta.height}  ${inKb}KB -> ${out} ${outKb}KB`);
}
