import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const imagesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

// O banner veio como SVG (57MB) com várias imagens em base64 + filtros/máscaras.
// O librsvg (sharp) estoura o parser; o resvg renderiza o SVG composto e o
// sharp grava um WebP de tamanho normal.
const src = join(imagesDir, 'banner-source.svg');
const out = join(imagesDir, 'banner.webp');

const svg = readFileSync(src);
const png = new Resvg(svg, { fitTo: { mode: 'width', value: 2000 } }).render().asPng();
await sharp(png).webp({ quality: 82 }).toFile(out);

const meta = await sharp(out).metadata();
const inMb = (statSync(src).size / 1024 / 1024).toFixed(1);
const outKb = (statSync(out).size / 1024).toFixed(0);
console.log(`banner-source.svg ${inMb}MB -> banner.webp ${meta.width}x${meta.height} ${outKb}KB`);
