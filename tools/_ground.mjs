import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

const types = JSON.parse(readFileSync('tools/_target_types.json', 'utf8'));
const flat = [];
for (const ns of Object.keys(types)) for (const t of types[ns]) flat.push({ ns, t });

const root = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';
function walk(dir, out = []) {
  let ents;
  try { ents = readdirSync(dir); } catch { return out; }
  for (const e of ents) {
    const p = join(dir, e);
    let st; try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) walk(p, out);
    else if (e.endsWith('.cs')) out.push(p);
  }
  return out;
}
const files = walk(root);
const cache = {};
function grepDecl(file, name) {
  const txt = cache[file] || (cache[file] = readFileSync(file, 'utf8'));
  const lines = txt.split('\n');
  const re = new RegExp('\\b(?:public\\s+|internal\\s+|abstract\\s+|sealed\\s+|partial\\s+)*(?:class|interface|struct|enum)\\s+' + name + '\\b');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!re.test(line)) continue;
    const baseM = line.match(/:\s*([A-Za-z_][\w<>,\s]*)/);
    let doc = '';
    for (let j = i - 1; j >= Math.max(0, i - 4); j--) {
      const dl = lines[j].trim();
      if (dl.startsWith('///')) doc = ' ' + dl.replace(/^\/\/\//, '').trim() + doc;
      else if (dl === '' || dl.startsWith('[')) continue;
      else break;
    }
    return { decl: line.trim().slice(0, 160), base: baseM ? baseM[1].trim().slice(0, 80) : '', doc: doc.trim().slice(0, 120) };
  }
  return null;
}
let found = 0;
const missing = [];
const out = [];
for (const item of flat) {
  const { ns, t } = item;
  let hit = null;
  for (const f of files) { hit = grepDecl(f, t); if (hit) break; }
  if (hit) {
    found++;
    out.push('[' + ns + '] ' + t + ' :: ' + (hit.base || '-') + '\n   ' + (hit.doc || '(no doc)') + ' | ' + hit.decl);
  } else missing.push(ns + '::' + t);
}
writeFileSync('tools/_ground.txt', out.join('\n') + '\n\n### MISSING (' + missing.length + '):\n' + missing.join('\n'));
console.log('found', found, '/', flat.length, 'missing', missing.length);
console.log(out.slice(0, 10).join('\n'));
