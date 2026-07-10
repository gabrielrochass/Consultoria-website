import sharp from 'sharp';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const assetsDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');

const BACKGROUND = { maxWidth: 1920, quality: 80 };
const CONTENT = { maxWidth: 900, quality: 80 };
const LOGO = { maxWidth: 400, quality: 90 };

const jobs = [
    { src: 'capaa.png', out: 'capaa.webp', ...BACKGROUND },
    { src: 'capa2.png', out: 'capa2.webp', ...BACKGROUND },
    { src: 'seguranca2.png', out: 'seguranca2.webp', ...BACKGROUND },
    { src: 'resp.png', out: 'resp.webp', ...BACKGROUND },
    { src: 'capa4.png', out: 'capa4.webp', ...BACKGROUND },
    { src: 'visao.png', out: 'visao.webp', ...BACKGROUND },
    { src: 'fundo-claro.png', out: 'fundo-claro.webp', ...BACKGROUND },
    { src: 'solange3.png', out: 'solange3.webp', ...CONTENT },
    { src: 'limp_predial.jpeg', out: 'limp_predial.webp', ...CONTENT },
    { src: 'portaria.png', out: 'portaria.webp', ...CONTENT },
    { src: 'porteiro.jpeg', out: 'porteiro.webp', ...CONTENT },
    { src: 'hosp.png', out: 'hosp.webp', ...CONTENT },
    { src: 'esp2.png', out: 'esp2.webp', ...CONTENT },
    { src: 'sobre2.png', out: 'sobre2.webp', ...CONTENT },
    { src: 'logo-noback.png', out: 'logo-noback.webp', ...LOGO },
];

const kb = (bytes) => (bytes / 1024).toFixed(1).padStart(9);

let before = 0;
let after = 0;

for (const { src, out, maxWidth, quality } of jobs) {
    const srcPath = join(assetsDir, src);
    const outPath = join(assetsDir, out);
    const srcBytes = statSync(srcPath).size;

    await sharp(srcPath)
        .rotate()
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality })
        .toFile(outPath);

    const outBytes = statSync(outPath).size;
    before += srcBytes;
    after += outBytes;
    console.log(`${kb(srcBytes)} KB -> ${kb(outBytes)} KB  ${src} -> ${out}`);
}

console.log('-'.repeat(60));
console.log(`total ${kb(before)} KB -> ${kb(after)} KB  (${(100 - (after / before) * 100).toFixed(1)}% menor)`);
