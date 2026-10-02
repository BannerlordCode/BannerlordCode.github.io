import { execSync } from 'child_process';
import fs from 'fs';
const cov = JSON.parse(fs.readFileSync('tools/data/handwritten-coverage-v145-zh.json', 'utf8'));
const deep = new Set(cov.deep_pass_paths);
const dir = 'content/v1.4.5/zh/api';
const out = [];
for (const ns of ['campaign-ext', 'mission-ext', 'core-extra']) {
  const base = `${dir}/${ns}`;
  let files = [];
  try { files = execSync(`find "${base}" -name "*.md"`).toString().split('\n').filter(Boolean); } catch {}
  for (const f of files) {
    const norm = f.replace(/\\/g, '/');
    if (deep.has(norm)) continue;
    const name = norm.split('/').pop().replace(/\.md$/, '');
    if (name === '_index') continue;
    let found = false;
    try {
      const r = execSync(`grep -rl "class ${name}\\b" --include=*.cs bannerlord-1.4.5/Bannerlord.Source/bin 2>/dev/null | head -1`).toString().trim();
      found = r !== '';
    } catch {}
    if (found) out.push(`${ns}/${name}`);
  }
}
console.log('STUB+source count:', out.length);
console.log(out.slice(0, 80).join('\n'));
fs.writeFileSync('tools/_scan_stubsrc_out.json', JSON.stringify(out, null, 0));
