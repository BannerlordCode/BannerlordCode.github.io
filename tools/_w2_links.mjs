import { existsSync } from 'node:fs';
import path from 'node:path';
const ROOT = process.cwd();
// targets given as "<bucket>/<Name>" relative to api root
const targets = process.argv.slice(2);
for (const t of targets) {
  const [bucket, name] = t.split('/');
  const row = [t];
  for (const lang of ['en', 'zh']) {
    row.push(`${lang}:${existsSync(path.resolve(ROOT, `content/v1.3.15/${lang}/api/${bucket}/${name}.md`)) ? 'OK' : 'NO'}`);
  }
  console.log(row.join('\t'));
}