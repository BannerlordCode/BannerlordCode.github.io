import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';
const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';

// Find module dirs (exclude bin)
function moduleDirs() {
  const out = [];
  for (const e of readdirSync(SRC)) {
    const p = join(SRC, e);
    if (statSync(p).isDirectory() && /^Modules\./.test(e)) out.push(p);
  }
  return out;
}

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    if (e === 'bin' || e === 'obj') continue;
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (/\.cs$/.test(e)) out.push(p);
  }
  return out;
}

const declRe = /^\s*(?:public|internal|protected|private|abstract|sealed|partial|static|new|unsafe|readonly|volatile|\s)*?\b(class|interface|struct|enum|delegate)\s+([A-Za-z_]\w*)(?:<[^>]*>)?\s*(?::\s*([^\{]+))?/;
const nsRe = /^\s*namespace\s+([A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*)/;

const index = new Map(); // fqname -> {base, kind, ns, name, file}
let files = [];
for (const m of moduleDirs()) files = files.concat(walk(m));
console.error('scanning', files.length, 'cs files...');

let counted = 0;
for (const f of files) {
  let text;
  try { text = readFileSync(f, 'utf8'); } catch { continue; }
  const lines = text.split('\n');
  let curNs = '';
  for (const line of lines) {
    const nm = line.match(nsRe);
    if (nm) curNs = nm[1];
    const dm = line.match(declRe);
    if (dm) {
      const kind = dm[1];
      const name = dm[2];
      const baseRaw = dm[3] ? dm[3].replace(/\s+/g, ' ').trim() : '';
      // take first base token (before comma)
      const base = baseRaw.split(',')[0].split(':')[0].trim();
      const fq = `${curNs}.${name}`;
      if (!index.has(fq)) index.set(fq, { base, kind, ns: curNs, name, file: f });
      counted++;
    }
  }
}
console.error('indexed', counted, 'declarations;', index.size, 'unique fqnames');

// Map gaps
const gap = JSON.parse(readFileSync(join(ROOT, 'tools/_current-r1-gaps-145-zh.json'), 'utf8'));
const gaps = gap.allGaps || gap.gaps || [];
const result = [];
let hit = 0, miss = 0;
for (const g of gaps) {
  const fq = `${g.namespace}.${g.typeName}`;
  const rec = index.get(fq);
  if (rec) { hit++; result.push({ ...g, base: rec.base, kind: rec.kind, file: rec.file.replace(SRC, '').replace(/\\/g, '/') }); }
  else { miss++; result.push({ ...g, base: '', kind: g.kind, file: '' }); }
}
console.error(`gaps=${gaps.length} hit=${hit} miss=${miss}`);
writeFileSync(join(ROOT, 'tools/_gap_bases.json'), JSON.stringify(result, null, 1));
console.log('wrote tools/_gap_bases.json');
